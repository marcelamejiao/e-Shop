import { useContext } from 'react';
import { PlantsContext } from '../../context/PlantsContextProvider';

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

	return (
		<div>
			<h3>Quantity added: {cartQuantity}</h3>
			<button onClick={incrementQuantity} disabled={stockQuantity === cartQuantity}>+</button>
			<button onClick={decrementQuantity}>-</button>
			{stockQuantity === cartQuantity && 
			<p>Sorry! the quantity desired is out of stock, more plants will be available soon! Thank you.</p>}
		</div>
	);
}

export default Counter;
