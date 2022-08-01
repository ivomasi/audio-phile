import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

import Layout from "../shared/Layout";
import ProductCard from "../components/ProductCard/ProductCard";
import styled from "styled-components";

function Product() {
	const { state } = useLocation();

	console.log(state);
	const { brand, model, stock, sold, price } = state.product;

console.log(brand,model)
	return (
		<Layout>
			<ProductLayout>
				<ProductCard  brand={brand}  sold={sold} price={price} model={model} />
				<ProductCard  brand={brand}  sold={sold} price={price} model={model}  />
			</ProductLayout>
		</Layout>
	);
}

const ProductLayout = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: 100vh;

`;

export default Product;
