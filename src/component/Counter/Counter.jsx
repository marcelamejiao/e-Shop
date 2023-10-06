import { useContext } from 'react';
import { PlantsContext } from '../../context/PlantsContextProvider';

const Counter = ({ itemIndex, cartQuantity }) => {
	const { updateQuantityInShoppingCart } = useContext(PlantsContext);


	const incrementQuantity = () => {

		updateQuantityInShoppingCart(itemIndex, cartQuantity + 1);
	}

	const decrementQuantity = () => {
		if(cartQuantity === 1) {
			const deletePlant = window.confirm("Are you sure you want to delete this plant from your shopping cart?");
			if(deletePlant === false) {
				return
			}
		}

		updateQuantityInShoppingCart(itemIndex, cartQuantity - 1);
	}



	return (
		<div>
			<h3>Quantity added: {cartQuantity}</h3>
			<button onClick={incrementQuantity}>+</button>
			<button onClick={decrementQuantity}>-</button>
		</div>
	);
}

export default Counter;
