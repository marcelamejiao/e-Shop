import CarouselItem from '../../component/CarouselItem/CarouselItem';
import { useState } from 'react';
import styles from "../Carousel/Carousel.module.scss";

const Carousel = ({ plants }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	let maxSlidesIndex = 0;

	const previousSlide = () => {
		// when press the back button on first slide, go to the last slide
		if(currentIndex === 0) {
			setCurrentIndex(maxSlidesIndex);
		// otherwise go to previous slide
		} else {
			setCurrentIndex(currentIndex - 1);
		}
	}

	const nextSlide = () => {
		// when press the next button on last slide, go to the first slide
		if(currentIndex === maxSlidesIndex) {
			setCurrentIndex(0);
		// otherwise go to next slide
		} else {
			setCurrentIndex(currentIndex + 1);
		}
	}

	let buttonClasses = styles['slides-buttons']

	return (
		<>
			<h2 className={styles.title}>Top Sellers</h2>
			<div className={styles.container}>
				<button className={buttonClasses} onClick={previousSlide}>&#10094;</button>
				{
					plants
						.filter((plant) => plant.favourited)
						.map((plant, index) => {
							// store the last index of the favourited plants
							maxSlidesIndex = index;
							if(index === currentIndex) {
								return <CarouselItem key={index} plant={plant} />
							}
						})
				}
				<button className={buttonClasses} onClick={nextSlide}>&#10095;</button>
			</div>
		</>
	);
}
export default Carousel;
