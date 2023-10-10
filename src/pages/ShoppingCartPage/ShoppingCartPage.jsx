import { useContext, useState } from "react";
import { PlantsContext } from '../../context/PlantsContextProvider';
import ShoppingPlantCard from "../../component/ShoppingPlantCard/ShoppingPlantCard";
import { Link } from 'react-router-dom';
import styles from '../ShoppingCartPage/ShoppingCartPage.module.scss';


const ShoppingCartPage = () => {
	const { shoppingCart, processPayment } = useContext(PlantsContext);
	const { plants } = useContext(PlantsContext);

	const myShoppingListArr = (shoppingCart).items;

	const [showPaymentMessage, setshowPaymentMessage] = useState(false);
	
	let total = 0;

	let paymentClasses = styles['payment-area'];

	return (
		
		<div>
			<h2 className={styles.title}>Your Shopping Cart</h2>
			<div className={styles.container}>
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
			</div>
			<div className={paymentClasses}>
				<p className={styles.total}>Total: ${total}</p>
				{ myShoppingListArr.length > 0 &&
					<button onClick={() => {
						processPayment();
						setshowPaymentMessage(true);
					}} className={styles.button}
					>Pay</button>
				}
			</div>
			{
				showPaymentMessage && 
				(<div className={styles.message}><p>Thank you for your purchase. </p><Link to="/plants">Return Home</Link></div>)
			}
		</div>
	);
}

export default ShoppingCartPage;
