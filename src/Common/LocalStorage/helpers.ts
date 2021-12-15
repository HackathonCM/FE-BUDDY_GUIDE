import { LocalStorageKeys } from "./interface";

export const setStorageValue = (key: LocalStorageKeys, value: string): void => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(value);
    }
    catch (err) {
        console.log(err);
    }
}

export const getStorageValue = (key: LocalStorageKeys): string | undefined => {
    try {
        const storageValue = localStorage.getItem(key);

        if (!storageValue)
            return undefined;
        return JSON.parse(storageValue);
    }
    catch (err) {
        console.log(err);
        return undefined;
    }
}

export const removeStorageValue = (key: LocalStorageKeys): void => {
    try {
        localStorage.removeItem(key);
    }
    catch (err) {
        console.log(err);
    }
}
