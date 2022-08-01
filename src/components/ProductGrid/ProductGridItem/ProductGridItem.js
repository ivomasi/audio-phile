import React, { useEffect, useState } from "react";


import styled from "styled-components";
import colors from "../../../styled-system/colors";


import Button from "../../Button/Button";
import { Link } from "react-router-dom";

function ProductGridItem({ product }) {


	return (
		<ItemWrapper>
				<Link to={{pathname: `/${product.category.toLowerCase()}/${product.id}`}} state={{product}}style={{textDecoration: "none", color: "inherit"}}>
					<ItemImageWrap>
						<ItemImage src={product.previewImage} />
					</ItemImageWrap>

					<ItemBio>
						<h3 style={{ color: product.discount ? colors.secondaryColor : colors.primaryColor }}>
							{product.price} €{product.discount ? <span>{Math.ceil(product.price + product.price * 0.1)} €</span> : null}
						</h3>

						<p>
							<b>{product.model}</b>
						</p>
						<p>{product.brand}</p>
					</ItemBio>
				</Link>

				<ItemAction>
					<Button text="Add to cart" rounded size="lg" width="100%" primary />
					<Button text="Quick view" rounded complementary size="lg" width="100%" />
				</ItemAction>
			</ItemWrapper>
	);
}

const ItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid ${colors.lightGrey};
	padding: 1rem;
	background-color: ${colors.white};
`;

// @TODO change to anchor tag
const ItemBio = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	overflow: hidden;

	h3 {
		position: relative;
		margin: 2rem 0;
		font-weight: 400;

		span {
			position: absolute;
			color: ${colors.darkGrey};
			text-decoration: line-through;
			right: 5rem;
		}
	}

	p {
		margin: 1rem 0;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		font-weight: 400;
	}
`;

const ItemAction = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
`;

const ItemImage = styled.img`
	display: block;
	width: 100%;
	height: auto;
	aspect-ratio: 16/12;
`;

const ItemImageWrap = styled.div``;

export default ProductGridItem;
