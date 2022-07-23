import EviroConfig from "config-items";
import CryptoJS from "crypto-js";

const encryptionKey = EviroConfig.app.encryptionKey;

export function textEncrypt(encryptionText) {
    const cipherText = CryptoJS.AES.encrypt(encryptionText, encryptionKey).toString();
    return cipherText
}

export function objectEncrypt(encryptionObject) {
    const cipherText = CryptoJS.AES.encrypt(JSON.stringify(encryptionObject), encryptionKey).toString();
    return cipherText
}

export function textDecrypt(cipherText) {
    const bytes = CryptoJS.AES.decrypt(cipherText, encryptionKey);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText
}

export function objectDecrypt(cipherText) {
    if (cipherText != null) {
        const bytes = CryptoJS.AES.decrypt(cipherText, encryptionKey);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData
    }
    else {
        return null
    }

}
