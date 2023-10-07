import { Link } from 'react-router-dom';

const CarouselItem = ({ plant }) => {
	return (
	<article style={{height: '200px', width: '100px'}}>
			<h2>{plant.name}</h2>
			<img style={{height: '100px', width: '50px'}} src={plant.imageLink} alt={plant.name} />
			<p>Price: ${plant.price}</p>
			<Link to={plant.id}>Open this Item</Link>
	</article>
	);
}

export default CarouselItem;
