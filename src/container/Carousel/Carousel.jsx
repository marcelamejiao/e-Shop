import CarouselItem from '../../component/CarouselItem/CarouselItem';

const Carousel = ({ plants }) => {
	return (
		<>
			<h2>Top Sellers:</h2>
			{
				plants
					.filter((plant) => plant.favourited)
					.map((plant, index) => <CarouselItem key={index} plant={plant} />)
			}
		</>
	);
}
export default Carousel;
