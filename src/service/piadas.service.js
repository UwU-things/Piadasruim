import database from '../lib/cliente';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore"

const piadaRef = collection(database, "piadas");

class piadasService {
    getPiadas = async () => {
        const piadas = await getDocs(piadaRef, orderBy("createdAt", "desc"));

        return piadas.docs.map((doc) => ({id: doc.id, ...doc.data()}));


    }
}

export default new piadasService();



