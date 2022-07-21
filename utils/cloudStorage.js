import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "../firebase/init"

export const saveToCloudStorage = (file, filePath) => {
    const storageRef = ref(storage, filePath);
    return uploadBytes(storageRef, file);
}

export const downloadFromStorage = (filePath) => {
    const storageRef = ref(storage, filePath);
    return getDownloadURL(storageRef);
}