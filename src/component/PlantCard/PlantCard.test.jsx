import { describe, it, expect} from "vitest";
import { render, screen } from '@testing-library/react';
import PlantCard from "./PlantCard";
import { BrowserRouter } from 'react-router-dom';

describe("Plant Card Component", () => {
	it("should render a plant name based on props", () => {
		// the component needs to be wrapped in the BrowserRouter if the component has a Link component
		render(
			<BrowserRouter>
				<PlantCard plant={{name: "Hanging Pearls"}} />
			</BrowserRouter>
		);
		const name = screen.getByText(/hanging pearls/i)
		expect(name).toBeInTheDocument;
	});

	it("should render a plant image based on props", () => {
		// the component needs to be wrapped in the BrowserRouter if the component has a Link component
		render(
			<BrowserRouter>
				<PlantCard plant={{imageLink: "myimage.com", name: "orchid"}} />
			</BrowserRouter>
		);
		const image = screen.getByAltText('orchid');
		expect(image.src).toContain("myimage.com");
		expect(image).toBeInTheDocument;
	});

	it("should render a plant price based on props", () => {
		// the component needs to be wrapped in the BrowserRouter if the component has a Link component
		render(
			<BrowserRouter>
				<PlantCard plant={{price: "13"}} />
			</BrowserRouter>
		);
		const price = screen.getByText(/13/i)
		expect(price).toBeInTheDocument;
	});
});