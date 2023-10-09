import { useState, useEffect } from "react";
import PlantList from '../../container/PlantList/PlantList';
import { liveStockUpdate } from '../../services/items-services';
import Carousel from "../../container/Carousel/Carousel";
import styles from "../PlantsPage/PlantsPage.module.scss";

const PlantsPage = () => {
	const [ plants, refreshPlants ] = useState([]);

	useEffect(() => {
		const liveStock = liveStockUpdate(refreshPlants);
		return () => liveStock();		
	}, []);


	return (
		<main >
			<h1 className={styles.title}>Welcome to Verde</h1>
			<div className={styles.container}>
				{<Carousel plants={plants} />}
				{plants.length > 0 && <PlantList plants={plants} />}
			</div>

		</main>
	);
}

export default PlantsPage;
