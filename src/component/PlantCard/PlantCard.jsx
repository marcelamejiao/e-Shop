import { Link } from 'react-router-dom';
import styles from '../PlantCard/PlantCard.module.scss';

const PlantCard = ({ plant }) => {
	return (
		<article className={styles.card}>
			<h2>{plant.name}</h2>
			<img src={plant.imageLink} alt={plant.name} />
			<p>Price: ${plant.price}</p>
			<Link to={plant.id}>See more...</Link>
		</article>
	);
};

export default PlantCard;
