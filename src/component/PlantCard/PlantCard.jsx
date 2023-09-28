import { Link } from 'react-router-dom';

const PlantCard = ({ plant }) => {
	return (
		<article>
			<h2>{plant.name}</h2>
			<img src={plant.imageLink} alt={plant.name} />
			<p>{plant.price}</p>
			<Link to={plant.id}>See more...</Link>
		</article>
	);
};

export default PlantCard;
