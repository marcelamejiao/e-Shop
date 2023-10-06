import {
	doc,
	setDoc,
	getDoc,
} from 'firebase/firestore';
import { db } from '../config/firestore';

const shoppingCartId = '1'

export const getShoppingCart = async () => {
	try {
		// getting the shopping cart from firestore
		const querySnapshot = await getDoc(
			doc(db, 'shopping-cart', shoppingCartId)
		);
		// when my cart does not exist,I create a new empty one. 
		if(!querySnapshot.exists()) {
			return {items: []}
		} else {
			// if my cart exist, return it.
			return querySnapshot.data();
		}
	} catch (e) {
		console.log(e);
    throw e;
	}
}

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