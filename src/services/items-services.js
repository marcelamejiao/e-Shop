import { 
	collection,
	getDocs,
	doc,
	getDoc,
	onSnapshot,
} from 'firebase/firestore';
import { db } from '../config/firestore';

export const getAllPlants = async () => {
	const collectionRef = collection(db, 'shop-items');
	const querySnapshot = await getDocs(collectionRef);
	return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getPlantById = async (id) => {
	const docRef = doc(db, 'shop-items', id);
	const querySnapshot = await getDoc(docRef);
	if (!querySnapshot.exists()) {
		throw new Error('Document not found');
	}
	return { id: querySnapshot.id, ...querySnapshot.data()};
}

export const liveStockUpdate = (callback) => {
  const collectionRef = collection(db, 'shop-items');
  const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
    const plantData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(plantData);
  });

  return unsubscribe;
};