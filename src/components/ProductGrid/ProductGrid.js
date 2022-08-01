import React from "react";

import styled from "styled-components";
import colors from "../../styled-system/colors";
import { down } from "styled-breakpoints";

import ProductGridItem from "./ProductGridItem/ProductGridItem";

function ProductGrid({ products }) {
	return (
		products && (
			<Grid>
				{products.map((item, index) => {
					return <ProductGridItem key={index} product={item}></ProductGridItem>;
				})}
			</Grid>
		)
	);
}

const Grid = styled.div`
	background-color: ${colors.white};
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	width: 80%;
	margin: 0 auto;

	${down("md")} {
		margin-top: 2rem;
		grid-template-columns: 1fr;
		grid-gap: 2rem;
		background-color: transparent;
	}
`;

export default ProductGrid;
