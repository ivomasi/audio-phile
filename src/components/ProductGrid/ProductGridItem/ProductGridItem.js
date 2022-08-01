import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../../styled-system/colors";
import Button from "../../Button/Button";

function ProductGridItem({ product }) {
	const [loading, setLoading] = useState(false);
	const [item, setItem] = useState({});

	useEffect(() => {
		setLoading((prevLoad) => !prevLoad);

		setItem(product);

		setLoading((prevLoad) => !prevLoad);

		console.log(product);
	}, [product]);

	return (
		!loading && (
			<ItemWrapper>
				<ItemImageWrap>
					<ItemImage src={item.previewImage} />
				</ItemImageWrap>

				<ItemBio>
					<h3 style={{ color: item.discount ? colors.secondaryColor : colors.primaryColor }}>
						{item.price} €{item.discount ? <span>{Math.ceil(item.price + item.price * 0.1)} €</span> : null}
					</h3>

					<p>
						<b>{item.model}</b>
					</p>
					<p>{item.brand}</p>
				</ItemBio>

				<ItemAction>
					<Button text="Add to cart" rounded size="lg" width="100%" />
					<Button text="Quick view" primary rounded size="lg" width="100%" />
				</ItemAction>
			</ItemWrapper>
		)
	);
}

const ItemWrapper = styled.div`
	display: grid;
	grid-template-rows: 2fr 2fr 1fr;
	border: 1px solid ${colors.lightGrey};
	padding: 1rem;
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
