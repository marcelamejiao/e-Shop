import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { PlantsContext } from '../../context/PlantsContextProvider';
import styles from '../AddToCartForm/AddToCartForm.module.scss';
import { toast } from 'react-toastify';

const AddToCartForm = ({ plant }) => {
	const { addItemToShoppingCart } = useContext(PlantsContext);
	const {
	register,
	reset,
	formState: {errors, isSubmitSuccessful},
	handleSubmit,
	} = useForm();

	useEffect(() => {
		reset();
	}, [isSubmitSuccessful]);

	const formSubmit = (data) => {
		const item = {
			// Conver variantId to a number
			variantId: Number(data.variantId),
			plantId: plant.id,
			quantity: 1
		}

		addItemToShoppingCart(item);
		toast.success("Your item has been added to the shopping cart!");
  };


	let totalQuantityInStock = 0;
	plant.variants.map((variant) => {
		totalQuantityInStock += variant.quantity;
	})

	return (
		<form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
			<div>
				Colors: 
				{plant.variants.map((variant, index) => 
					<div key={index}>
						<input 
							disabled={variant.quantity === 0}
							required
							type="radio" 
							id="colors"
							value={variant.id}
							{...register('variantId')}
						/>
						<label htmlFor="colors"> {variant.color} {variant.quantity === 0 && <span>(Out of stock)</span>}</label>
						{errors.username && (
						<p>{errors.username.message}</p>
					)}
					</div>
				)}
				<button className={styles.button} disabled={totalQuantityInStock === 0} >Add to cart</button>
			</div>

		</form>
	);
}

export default AddToCartForm;
