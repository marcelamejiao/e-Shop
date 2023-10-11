import { useContext } from 'react';
import { PlantsContext } from '../../context/PlantsContextProvider';
import styles from '../Counter/Counter.module.scss';

const Counter = ({ itemIndex, cartQuantity, stockQuantity }) => {
	const { updateQuantityInShoppingCart } = useContext(PlantsContext);


	const incrementQuantity = () => {
		updateQuantityInShoppingCart(itemIndex, cartQuantity + 1);
	}

	const decrementQuantity = () => {
		if(cartQuantity === 1) {
			const deletePlant = window.confirm("Are you sure you want to delete this plant from your shopping cart?");
			if(deletePlant === false) {
				return;
			}
		}
		updateQuantityInShoppingCart(itemIndex, cartQuantity - 1);
	}

	let quantityButtonStyles = styles['quantity-buttons'];

	return (
		<div>
			<h3 className={styles.text}>Quantity: {cartQuantity}</h3>
			<button className={quantityButtonStyles} onClick={incrementQuantity} disabled={stockQuantity === cartQuantity}>+</button>
			<button className={quantityButtonStyles} onClick={decrementQuantity}>-</button>
			{stockQuantity === cartQuantity && 
			<p>Sorry! the quantity desired is out of stock, more plants will be available soon! Thank you.</p>}
		</div>
	);
}

export default Counter;
