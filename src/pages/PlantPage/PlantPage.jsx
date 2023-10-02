import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getPlantById } from '../../services/items-services';
import styles from '../PlantPage/PlantPage.module.scss';

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
		<main className={styles.container}>
			{plant && (
				<div className={styles.card}>
					<h1>{plant.name}</h1>
					<img className={styles.image} src={plant.imageLink} alt={plant.name} />
					<p>Price: ${plant.price}</p>
					<ul>Colors: 
						{plant.variants.map((variant, index) => <li key={index}>{variant.color}</li>
						)}
					</ul>
				</div>
			)}
			{error && <p>Could not find plant with Id: {id}</p>}
		</main>
	);
}

export default PlantMovie;
