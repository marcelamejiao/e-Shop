import { createContext, useEffect, useState } from "react";
import { getAllPlants } from "../services/items-services";
import { updateShoppingCart } from "../services/shopping-cart-service";

export const PlantsContext = createContext(null);

const PlantsContextProvider = ({ children }) => {
	const [plants, setPlants] = useState([]);
	const [shoppingCart, setShoppingCart] = useState([]);

	updateShoppingCart({data: 25});

	const refreshPlants = () => {
		getAllPlants()
		.then((plants) => setPlants(plants))
		.catch((e) => console.log(e));
	}

	useEffect(() => {
		refreshPlants();		
	}, []);

	const updatePlantById = (id, data) => {
    const copy = [...plants];
    const foundIndex = copy.findIndex((plant) => plant.id === id);
    const foundPlant = copy[foundIndex];
    const updatedPlant = { ...foundPlant, ...data };
    copy[foundIndex] = updatedPlant;
    setPlants(copy);
  };

	// Add item to shopping cart
	const addItemToShoppingCart = (item) => {
		console.log(item)
	}


	return (
		<PlantsContext.Provider 
			value={{
				plants, 
				refreshPlants,
				updatePlantById,
				addItemToShoppingCart,
			}}
		>
			{children}
		</PlantsContext.Provider>
	);
}

export default PlantsContextProvider;
