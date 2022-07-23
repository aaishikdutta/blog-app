import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/init"

export const addPost = async (blogHTML,blogPhotoFileURL,blogPhotoName,blogTitle, profileId, date) => {
    const collectionRef = collection(db, 'posts');
    return await addDoc(collectionRef, {
        blogTitle,
        blogHTML,
        blogPhotoName,
        blogPhotoFileURL,
        profileId,
        date,
    });
}