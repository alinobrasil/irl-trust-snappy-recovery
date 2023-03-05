import type { Encrypted } from 'eth-crypto';
export declare type AesEncryptedData = {
    initializationVectorInBase64: string;
    encryptedDataInBase64: string;
};
export declare type EncryptedBackupKeypairPart = Encrypted;
