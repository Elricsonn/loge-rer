// Authentification partagée par le simulateur (Loge_RER.html) et le quiz
// (XQuiz RER/quiz_rer.html) : une seule liste d'empreintes, une seule
// fonction de hachage. Changer un mot de passe = changer son empreinte ici.

// ─── AUTHENTIFICATION
// Note : mot de passe MESA à définir ─────────────────────────────────────────────────────────
const HASHES = {
    apprenti:  '9aa9ed6b0cb5cbca74cf85b30021606c5792fa3c1bc3aaf904b59d1d05cd4e77',
    compagnon: 'ccb17f8c09e578d9d42ad97825dd4ab0c4b2a133ea00f863fa31ea2af5930cf7',
    maitre:    '3b1974ecb816ea49206f3f227a55b39e1f56e7e8b1289d2c726c3ba6ac7a2b33',
    me:        '4f0645761ceff50aec389142f018819bdd9292dd9a1bba4310bc6160d2974983',
};

// SHA-256 en JS pur — fonctionne sans serveur (file://)
function sha256(str) {
    function rightRotate(value, amount) {
        return (value >>> amount) | (value << (32 - amount));
    }
    const mathPow = Math.pow;
    const maxWord = mathPow(2, 32);
    let result = '';
    const words = [];
    const asciiBitLength = str.length * 8;
    let hash = [], k = [];
    let primeCounter = 0;
    const isComposite = {};
    for (let candidate = 2; primeCounter < 64; candidate++) {
        if (!isComposite[candidate]) {
            for (let i = 0; i < 313; i += candidate) isComposite[i] = candidate;
            hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
            k[primeCounter++]  = (mathPow(candidate, 1/3) * maxWord) | 0;
        }
    }
    str += '\x80';
    while (str.length % 64 - 56) str += '\x00';
    for (let i = 0; i < str.length; i++) {
        const j = str.charCodeAt(i);
        if (j >> 8) return '';
        words[i >> 2] |= j << ((3 - i) % 4) * 8;
    }
    words[words.length] = ((asciiBitLength / maxWord) | 0);
    words[words.length] = (asciiBitLength | 0);
    for (let j = 0; j < words.length;) {
        const w = words.slice(j, j += 16);
        const oldHash = [...hash];
        for (let i = 0; i < 64; i++) {
            const w15 = w[i - 15], w2 = w[i - 2];
            const a = hash[0], e = hash[4];
            const temp1 = hash[7]
                + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25))
                + ((e & hash[5]) ^ (~e & hash[6]))
                + k[i]
                + (w[i] = (i < 16) ? w[i] : (
                    w[i - 16]
                    + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3))
                    + w[i - 7]
                    + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))
                ) | 0);
            const temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22))
                + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
            hash = [(temp1 + temp2) | 0, a, hash[1], hash[2],
                    (hash[3] + temp1) | 0, e, hash[5], hash[6]];
        }
        hash = hash.map((v, i) => (v + oldHash[i]) | 0);
    }
    hash.forEach(val => {
        for (let i = 7; i >= 0; i--) {
            result += ((val >>> (i * 4)) & 0xf).toString(16);
        }
    });
    return result;
}
