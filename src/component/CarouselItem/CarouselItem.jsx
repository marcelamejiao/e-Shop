import { Link } from 'react-router-dom';
import styles from "../CarouselItem/CarouselItem.module.scss";

const CarouselItem = ({ plant }) => {
	return (
	<article className={styles.card}>
			<img  className={styles.image}  src={plant.imageLink} alt={plant.name} />
			<div className={styles.info}>
				<h3>{plant.name}</h3>
				<p>Price: ${plant.price}</p>
				<Link to={plant.id}>Open this Item</Link>
			</div>
	</article>
	);
}

export default CarouselItem;
