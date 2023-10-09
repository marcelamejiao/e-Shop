import Counter from "../Counter/Counter";
import styles from "../ShoppingPlantCard/ShoppingPlantCard.module.scss";

const ShoppingPlantCard = ({ plant, itemIndex, cartQuantity, variantId, subTotal }) => {
	// comparing the variant id from the shopping cart with the plant variant id, so I can give it to the Counter as a props
	const variant = plant.variants.find((variant) => {

		return  variant.id === variantId
	});

	return (
		<article className={styles.card}>
			<img className={styles.image} src={plant.imageLink} alt={plant.name} />
			<div className={styles.info}>
				<h2>{plant.name}</h2>
				<h3 className={styles.color}>Colour: {variant.color}</h3>
				<p>Price: ${plant.price}</p>
				<Counter itemIndex={itemIndex} cartQuantity={cartQuantity} stockQuantity={variant.quantity}/>
				<p className={styles.subtotal}>Subtotal: ${subTotal}</p>
			</div>
		</article>
	);
}

export default ShoppingPlantCard;
