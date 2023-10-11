import { describe, it, expect} from "vitest";
import { render, screen } from '@testing-library/react';
import Counter from "./Counter";
import PlantsContextProvider from "../../context/PlantsContextProvider";

describe("Counter Component", () => {
	it("shows a message when the quantity of one color if out of stock", () => {
		render(
			<PlantsContextProvider>
				<Counter cartQuantity={10} stockQuantity={10} />
			</PlantsContextProvider>
		);
		const message = screen.getByText("Sorry! the quantity desired is out of stock, more plants will be available soon! Thank you.")
		expect(message).toBeInTheDocument();
	});

	it("does not show a message when there is stock of a color", () => {
		render(
			<PlantsContextProvider>
				<Counter cartQuantity={10} stockQuantity={20} />
			</PlantsContextProvider>
		);
		const message = screen.queryByText("Sorry! the quantity desired is out of stock, more plants will be available soon! Thank you.")
		expect(message).not.toBeInTheDocument();
	});
});