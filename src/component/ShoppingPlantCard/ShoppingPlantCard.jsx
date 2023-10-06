import Counter from "../Counter/Counter";

const ShoppingPlantCard = ({ plant, itemIndex, cartQuantity }) => {
	console.log(plant);
	return (
		<article>
			<h2>{plant.name}</h2>
			<img src={plant.imageLink} alt={plant.name} />
			<p>Price: ${plant.price}</p>
			<p><Counter itemIndex={itemIndex} cartQuantity={cartQuantity}/> </p>
		</article>
	);
}

export default ShoppingPlantCard;
