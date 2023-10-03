import { Link } from 'react-router-dom';

const CarouselItem = ({ plant }) => {
	return (
	<article>
			<h2>{plant.name}</h2>
			<img src={plant.imageLink} alt={plant.name} />
			<p>Price: ${plant.price}</p>
			<Link to={plant.id}>Open this Item</Link>
	</article>
	);
}

export default CarouselItem;
