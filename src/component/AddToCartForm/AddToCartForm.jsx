import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { PlantsContext } from '../../context/PlantsContextProvider';

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
			...data,
			plantId: plant.id
		}

		addItemToShoppingCart(item);
  };

	return (
		<form onSubmit={handleSubmit(formSubmit)}>
			<div>
				Colors: 
				{plant.variants.map((variant, index) => 
				<div key={index}>
					<input 
						required
						type="radio" 
						id="colors"
						value={variant.id}
						{...register('variantId')}
					/>
					<label htmlFor="colors"> {variant.color}</label>
					{errors.username && (
          <p>{errors.username.message}</p>
        )}
				</div>
				)}
				<button>Add to cart</button>
			</div>
		</form>
	);
}

export default AddToCartForm;
