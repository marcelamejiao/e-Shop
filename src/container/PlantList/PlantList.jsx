import PlantCard from "../../component/PlantCard/PlantCard";
import styles from "../PlantList/PlantList.module.scss";

const PlantList = ( {plants} ) => {
	return (
		<section>
			<h3>There are {plants.length} different type of plants available</h3>
			<div className={styles.container}>
				{plants.map((plant) =>
					<PlantCard key={plant.id} plant={plant} />
				)}
			</div>
		</section>
	);
}

export default PlantList;
