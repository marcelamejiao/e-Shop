import { useState, useEffect } from "react";
import PlantList from '../../container/PlantList/PlantList';
import { liveStockUpdate } from '../../services/items-services';
import Carousel from "../../container/Carousel/Carousel";

const PlantsPage = () => {
	const [ plants, refreshPlants ] = useState([]);

	useEffect(() => {
		const liveStock = liveStockUpdate(refreshPlants);
		return () => liveStock();		
	}, []);


	return (
		<main>
			<h1>Welcome to Verde</h1>
			{/* {<Carousel plants={plants} />} */}
			{plants.length > 0 && <PlantList plants={plants} />}
		</main>
	);
}

export default PlantsPage;
