import React from "react";

import { useLocation, Navigate } from "react-router-dom";



import styled from "styled-components";
import {down} from "styled-breakpoints"

import Layout from "../shared/Layout";
import ProductView from "../components/ProductView/ProductView";
import Description from "../components/Description/Description";
import ProductCard from "../components/ProductCard/ProductCard";

function Product() {
	const { state } = useLocation();

	if (!state) return <Navigate to="/nomatch" />


	const { brand, model, stock, sold, price } = state.product;




	return (
		<Layout>
			<ProductLayout>
				<Description {...state.product}/>
				<ProductCard brand={brand} sold={sold} price={price} model={model} stock={stock} />
			</ProductLayout>
		</Layout>
	);
}

const ProductLayout = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: stretch;
	padding: 2rem 5rem;
	gap: 1rem;

	${down("lg")} {
		flex-direction: column;
		padding: 1rem;
	}
`;

export default Product;
