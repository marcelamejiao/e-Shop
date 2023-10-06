import { useContext } from "react";
import { PlantsContext } from '../../context/PlantsContextProvider';
import ShoppingPlantCard from "../../component/ShoppingPlantCard/ShoppingPlantCard";


const ShoppingCartPage = () => {
	const { shoppingCart } = useContext(PlantsContext);
	const { plants } = useContext(PlantsContext);

	const myShoppingListArr = (shoppingCart).items;

	
	return (
		
		<div>
			<h2>Shopping Cart: </h2>
				{
					myShoppingListArr.map((item, index) => {
						const plantId = item.plantId;
						const foundPlant = plants.find((plant) => plant.id === plantId);
						return <ShoppingPlantCard 
											key={index} 
											itemIndex={index} 
											cartQuantity={item.quantity}
											plant={foundPlant} 
										/>;
					})
				}
		</div>
	);
}

export default ShoppingCartPage;
