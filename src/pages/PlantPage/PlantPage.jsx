import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getPlantById } from '../../services/items-services';
import AddToCartForm from "../../component/AddToCartForm/AddToCartForm";
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

	const imageWrapper = styles["image-wrapper"];

	return (
		<main className={styles.container}>
			{plant && (
				<div className={styles.card}>
					<div>
						<h1 className={styles.title}>{plant.name}</h1>
						<div className={imageWrapper}>
							<img className={styles.image} src={plant.imageLink} alt={plant.name} />
						</div>
						<p className={styles.price}>Price: ${plant.price}</p>
					</div>
					<AddToCartForm plant={plant}/>
				</div>
			)}
			{error && <p>Could not find plant with Id: {id}</p>}
		</main>
	);
}

export default PlantMovie;
