import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const AddToCartForm = ({ plant }) => {

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
    console.log('form was submitted with ', data);
  };

	return (
		<form onSubmit={handleSubmit(formSubmit)}>
			<div>
				Colors: 
				{plant.variants.map((variant, index) => 
				<div key={index}>
					<input 
						type="radio" 
						id="colors"
						value={variant.color}
						{...register('colors')}
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
