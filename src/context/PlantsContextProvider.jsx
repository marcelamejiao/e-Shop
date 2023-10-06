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


	// Update quantity in the shopping cart when press + and -

	const updateQuantityInShoppingCart = (itemIndex, cartQuantity) => {
		
	}

	// Add item to shopping cart
	const addItemToShoppingCart = (item) => {
		console.log(shoppingCart);
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
				updatePlantById,
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
