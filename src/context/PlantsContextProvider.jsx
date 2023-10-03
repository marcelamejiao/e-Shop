import { createContext, useEffect, useState } from "react";
import { getAllPlants } from "../services/items-services";

export const PlantsContext = createContext(null);

const PlantsContextProvider = ({ children }) => {
	const [plants, setPlants] = useState([]);

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

	// // Add item to shopping cart
	// const addPlantToShoppingCart = ()


	return (
		<PlantsContext.Provider 
			value={{
				plants, 
				refreshPlants,
				updatePlantById,
			}}
		>
			{children}
		</PlantsContext.Provider>
	);
}

export default PlantsContextProvider;
