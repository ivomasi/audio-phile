import React from "react";

import { useLocation, Navigate } from "react-router-dom";

import Layout from "../shared/Layout";
import ProductCard from "../components/ProductCard/ProductCard";
import Carousel from "../components/Carousel/Carousel";

import styled from "styled-components";
import {down} from "styled-breakpoints"


function Product() {
	const { state } = useLocation();

	if (!state) return <Navigate to="/nomatch" />


	const { brand, model, stock, sold, price, imagesUrl } = state.product;




	return (
		<Layout>
			<ProductLayout>
				<Carousel images={imagesUrl} />
				<ProductCard brand={brand} sold={sold} price={price} model={model} />
			</ProductLayout>
		</Layout>
	);
}

const ProductLayout = styled.section`
	display: flex;
	justify-content: flex-start;
	padding: 2rem 5rem;
	gap: 1rem;

	${down("lg")} {
		flex-direction: column;
		padding: 1rem;
	}
`;

export default Product;
