import PlantCard from "../../component/PlantCard/PlantCard";

const PlantList = ( {plants} ) => {
	return (
		<section>
			<h3>There are {plants.length} different type of plants available</h3>
			<div>
				{plants.map((plant) =>
					<PlantCard key={plant.id} plant={plant} />
				)}
			</div>
		</section>
	);
}

export default PlantList;
