import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getPlantById } from '../../services/items-services';

const PlantMovie = () => {
	const { id } = useParams();
	const [plant, setPlant] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		getPlantById(id)
		.then((plant) =>  setPlant(plant))
		.catch((error) => setError(error));
	}, [id]);


	return (
		<main>
			{plant && (
				<>
					<h1>{plant.name}</h1>
					<img src={plant.imageLink} alt={plant.name} />
					<p>Price: ${plant.price}</p>
					<ul>Colors: 
						{plant.variants.map((variant, index) => <li key={index}>{variant.color}</li>
						)}
					</ul>
				</>
			)}
			{error && <p>Could not find plant with Id: {id}</p>}
		</main>
	);
}

export default PlantMovie;
