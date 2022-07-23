import { addDoc, collection, getDocs, orderBy, query } from "firebase/firestore"
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

export const getPosts = async() => {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, orderBy('date', 'desc'));
    return await getDocs(q);
}