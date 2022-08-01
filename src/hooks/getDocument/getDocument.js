
//firebase
import {  collection } from 'firebase/firestore';
import { db } from "../../firebase.js";



const getDocument = async (collectionName, document) => {
    const collectionRef = collection(db, collectionName).doc(document.id)
    const doc = await collectionRef.get()

    if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
      }
    /* const documents = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    return documents */

    
}

export default getDocument