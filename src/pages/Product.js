import React from "react";

import { useLocation, Navigate } from "react-router-dom";

import Layout from "../shared/Layout";


import styled from "styled-components";
import {down} from "styled-breakpoints"
import ProductView from "../components/ProductView/ProductView";


function Product() {
	const { state } = useLocation();

	if (!state) return <Navigate to="/nomatch" />


	const { brand, model, stock, sold, price, imagesUrl } = state.product;




	return (
		<Layout>
			<ProductLayout>
				<ProductView  images={imagesUrl} brand={brand} sold={sold} price={price} model={model} stock={stock}/>
				
			</ProductLayout>
		</Layout>
	);
}

const ProductLayout = styled.section`
	display: flex;
	justify-content: flex-start;
	padding: 2rem 5rem;
	gap: 1rem;

	margin-bottom: 100vh;
	${down("lg")} {
		flex-direction: column;
		padding: 1rem;
	}
`;

export default Product;
