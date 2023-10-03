import { useState } from 'react';

const Counter = () => {

	const [count, setCount] = useState(0);
	const [totalItemsPerReference, setTotalItemsPerReference] = useState(1);

	const incrementQuantity = () => {
		setCount(count + 1);
		setTotalItemsPerReference(totalItemsPerReference + 1);
	}

	const decrementQuantity = () => {
		setCount(count - 1);
		setTotalItemsPerReference(totalItemsPerReference - 1);
	}

	if(totalItemsPerReference <= 0) {
		window.alert("Are you sure you want to delete this plant from your shopping cart?");
	}

	return (
		<div>
			<h3>Quantity added: {totalItemsPerReference}</h3>
			<button onClick={incrementQuantity}>+</button>
			<button onClick={decrementQuantity}>-</button>
		</div>
	);
}

export default Counter;
