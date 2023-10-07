import { useContext, useState } from "react";
import { PlantsContext } from '../../context/PlantsContextProvider';
import ShoppingPlantCard from "../../component/ShoppingPlantCard/ShoppingPlantCard";
import { Link } from 'react-router-dom';


const ShoppingCartPage = () => {
	const { shoppingCart, processPayment } = useContext(PlantsContext);
	const { plants } = useContext(PlantsContext);

	const myShoppingListArr = (shoppingCart).items;

	const [showPaymentMessage, setshowPaymentMessage] = useState(false);
	
	let total = 0;
	return (
		
		<div>
			<h2>Shopping Cart: </h2>
				{
					myShoppingListArr.map((item, index) => {
						const plantId = item.plantId;
						const foundPlant = plants.find((plant) => plant.id === plantId);

						const subTotal =  foundPlant.price * item.quantity;
						total += subTotal;
						return <ShoppingPlantCard 
											key={index} 
											itemIndex={index} 
											cartQuantity={item.quantity}
											variantId={item.variantId}
											plant={foundPlant} 
											subTotal={subTotal}
										/>;
						
					})
				}
			<p>Total: ${total}</p>
			<button onClick={() => {
				processPayment();
				setshowPaymentMessage(true);
			}}>Pay</button>
			{
				showPaymentMessage && 
				(<div><p>Thank you for your purchase. </p><Link to="/plants">Home</Link></div>)
			}
		</div>
	);
}

export default ShoppingCartPage;
