import React from "react";

//css
import styled from "styled-components";
import colors from "../../styled-system/colors";
import { between, down } from "styled-breakpoints";

//comps
import Button from "../Button/Button";
import InfoCard from "../InfoCard/InfoCard";
import Svg from "../Svg/Svg";

import svgImages from "../../assets";

const { productCard } = svgImages;

function ProductCard({ model, brand, price, stock, sold }) {
	return (
		<Card>
			<h2>{`${brand} ${model}`}</h2>
			{sold > 240 && <span>best seller</span>}
			<p className="price">{price} €</p>
			<StockText color={stock >= 10 ? colors.green : stock === 0 ? colors.grey : colors.secondaryColor}>
				{stock >= 10 ? "In stock" : stock === 0 ? "OUT OF STOCK" : "ALMOST OUT"}
			</StockText>
			<p>Ships Same Business Day (Monday - Friday)</p>

			<Button
				primary
				style={{ backgroundColor: stock !== 0 ? null : colors.grey }}
				rounded
				text={stock !== 0 ? "add to cart" : "OUT OF STOCK"}
				size="lg"
				width="100%"
				disabled={stock !== 0 ? false : true}
			/>

			<ShipIcons>
				{productCard.map(({ img, title }, index) => {
					return <InfoCard key={index} IconComponent={<Svg url={img} alt={title} />} title={title} />;
				})}
			</ShipIcons>
		</Card>
	);
}

const Card = styled.div`
	display: flex;
	border: 1px solid ${colors.grey};
	background-color: ${colors.white};
	flex-direction: column;
	padding: 2rem;
	justify-content: space-around;
	align-items: flex-start;
	max-height: 80vh;
	flex-basis: 33%;
	position: sticky;
	align-self: stretch;
	top: 25px;

	${down("md")} {
		max-height: inherit;
	}

	span {
		background-color: ${colors.lightGreen};
		color: ${colors.green};
		font-weight: 600;
		padding: 0.35rem;
		border-radius: 5px;
		text-transform: uppercase;
	}

	.price {
		font-size: 2rem;
		font-weight: 600;
	}
`;

const StockText = styled.b`
	color: ${(props) => props.color};
`;

const ShipIcons = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	grid-gap: 0.5rem;

	${between("md", "xl")} {
		grid-template-columns: 1fr 1fr;
	}
	${down("md")} {
		grid-template-columns: 1fr;
		align-self: center;
	}
`;

export default ProductCard;
