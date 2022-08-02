

//firebase
import { getDocs, collection, query, orderBy, limit, startAfter} from 'firebase/firestore';
import { db } from "../../firebase.js";


const getCollection = async (collectionName) => {
    const collectionRef = collection(db, collectionName)
    const data = await getDocs(collectionRef)

    const documents = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    return documents
    


}



export  default getCollection