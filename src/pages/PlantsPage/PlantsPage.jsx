import { useState, useEffect } from "react";
import { PlantsContext } from "../../context/PlantsContextProvider";
import PlantList from '../../container/PlantList/PlantList';
import { liveStockUpdate } from '../../services/items-services';


const PlantsPage = () => {
	const [ plants, refreshPlants ] = useState([]);

	useEffect(() => {
		const liveStock = liveStockUpdate(refreshPlants);
		return () => liveStock();		
	}, []);


	return (
		<main>
			<h1>Welcome to Verde</h1>
			{plants.length > 0 && <PlantList plants={plants} />}
		</main>
	);
}

export default PlantsPage;
