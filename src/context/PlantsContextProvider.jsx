import { createContext, useEffect, useState } from "react";
import { getAllPlants } from "../services/items-services";
import { updateShoppingCart, getShoppingCart } from "../services/shopping-cart-service";

export const PlantsContext = createContext(null);

const PlantsContextProvider = ({ children }) => {
	const [plants, setPlants] = useState([]);
	const [shoppingCart, setShoppingCart] = useState({items: []});

	const refreshPlants = () => {
		getAllPlants()
		.then((plants) => setPlants(plants))
		.catch((e) => console.log(e));
	}

	const refreshShoppingCart = () => {
		getShoppingCart()
		.then	((shoppingCart) => setShoppingCart(shoppingCart))
		.catch((e) => console.log(e));
	}

	useEffect(() => {
		refreshPlants();
		refreshShoppingCart();
	}, []);


	// Update quantity in the shopping cart when press + and - in the Counter
	const updateQuantityInShoppingCart = (itemIndex, cartQuantity) => {

		// clone the state variable, so React detects a new object and changes the state 
		const updatedShoppingCart = {...shoppingCart};

		if(cartQuantity === 0) {
			updatedShoppingCart.items.splice(itemIndex, 1);
		} else {
			// replacing the current quantity in the shopping cart item
			updatedShoppingCart.items[itemIndex].quantity = cartQuantity;
		}

		// update the state
		setShoppingCart(updatedShoppingCart);
		// give the state to the database 
		updateShoppingCart(updatedShoppingCart);


	}

	// Add item to shopping cart
	const addItemToShoppingCart = (item) => {
		shoppingCart.items.push(item)
		const updatedShoppingCart = {...shoppingCart}
		setShoppingCart(updatedShoppingCart);
		// updates my shopping cart service, my database
		updateShoppingCart(updatedShoppingCart);
	}

	return (
		<PlantsContext.Provider 
			value={{
				plants, 
				refreshPlants,
				addItemToShoppingCart,
				shoppingCart,
				updateQuantityInShoppingCart,
			}}
		>
			{children}
		</PlantsContext.Provider>
	);
}

export default PlantsContextProvider;
