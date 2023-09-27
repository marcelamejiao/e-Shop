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

	return (
		<PlantsContext.Provider value={{plants, refreshPlants}}>
			{children}
		</PlantsContext.Provider>
	);
}

export default PlantsContextProvider;
