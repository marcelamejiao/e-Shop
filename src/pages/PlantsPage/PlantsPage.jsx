import { useContext, useEffect } from "react";
import { PlantsContext } from "../../context/PlantsContextProvider";


const PlantsPage = () => {
	const { plants, refreshPlants } = useContext(PlantsContext);

	useEffect(() => {
		refreshPlants();		
	}, []);


	return (
		<main>
			<h1>Plants</h1>
		</main>
	);
}

export default PlantsPage;
