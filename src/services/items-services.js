import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firestore';

export const getAllItems = async () => {
	const collectionRef = collection(db, 'shop-items');
	const querySnapshot = await getDocs(collectionRef);
	return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};