import { useContext } from "react";
import { PlantsContext } from '../../context/PlantsContextProvider';
import ShoppingPlantCard from "../../component/ShoppingPlantCard/ShoppingPlantCard";


const ShoppingCartPage = () => {
	const { shoppingCart } = useContext(PlantsContext);
	const { plants } = useContext(PlantsContext);

	const myShoppingListArr = (shoppingCart).items;
	
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
		</div>
	);
}

export default ShoppingCartPage;
