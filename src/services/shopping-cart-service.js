import {
	doc,
	setDoc
} from 'firebase/firestore';
import { db } from '../config/firestore';

const shoppingCartId = '1'

export const updateShoppingCart = async (data) => {
	try {
		await setDoc(
			doc(db, 'shopping-cart', shoppingCartId), 
			data
		)
	} catch (e) {
		console.log(e);
    throw e;
	}
}