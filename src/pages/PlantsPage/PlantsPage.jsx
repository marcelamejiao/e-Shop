import { useContext, useEffect } from "react";
import { PlantsContext } from "../../context/PlantsContextProvider";
import PlantList from '../../container/PlantList/PlantList';


const PlantsPage = () => {
	const { plants, refreshPlants } = useContext(PlantsContext);

	useEffect(() => {
		refreshPlants();		
	}, []);


	return (
		<main>
			<h1>Plants</h1>
			{plants.length > 0 && <PlantList plants={plants} />}
		</main>
	);
}

export default PlantsPage;
