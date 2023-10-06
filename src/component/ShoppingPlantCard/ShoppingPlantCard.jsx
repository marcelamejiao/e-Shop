import Counter from "../Counter/Counter";

const ShoppingPlantCard = ({ plant, itemIndex, cartQuantity, variantId }) => {
	// comparing the variant id from the shopping cart with the plant variant id, so I can give it to the Counter as a props
	const variant = plant.variants.find((variant) => {

		console.log(variant.id);
		console.log(variantId);
		return  variant.id === variantId
	});

	return (
		<article>
			<h2>{plant.name}</h2>
			<img src={plant.imageLink} alt={plant.name} />
			<p>Price: ${plant.price}</p>
			<p><Counter itemIndex={itemIndex} cartQuantity={cartQuantity} stockQuantity={variant.quantity}/> </p>
		</article>
	);
}

export default ShoppingPlantCard;
