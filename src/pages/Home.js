import React, { useEffect, useState } from "react";

//css
import styled from "styled-components";
import { down, between } from "styled-breakpoints";
//comps
import Layout from "../shared/Layout";
import Button from "../components/Button/Button";
import colors from "../styled-system/colors";
import InfoCard from "../components/InfoCard/InfoCard";

//svg icons
import Svg from "../components/Svg/Svg";
import svgImages from "../assets";

//get data from db
import getCollection from "../hooks/getCollection/getCollection";

function Home() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		const setData = async () => {

			const data = await getCollection("headphones");
			setProducts(data);
		};

		setData();
	}, []);

	const handlePreorder = (e) => {
		console.log("Preorder");
	};

	const { homePage } = svgImages;

	return (
		<Layout>
			<Content>
			<Offer imageUrl={products ? products[0].previewImage : "/img/placeholder-img.png"}>
					<h2>{products ?`${ products[0].brand} ${products[0].model}` : null}</h2>
					<p>{products ? products[0].description : null}</p>
					<Button type="button" text="pre-order now" size="lg" primary rounded onClick={handlePreorder} />
				</Offer>
				<h2>Shop the World’s Best Selection of Premium Headphones.</h2>
				<Benefits>
					{homePage.map(({ img, text, title }, index) => {
						return <InfoCard key={index} IconComponent={<Svg url={img} alt={title} size="lg" />} text={text} title={title} size />;
					})}
				</Benefits>
			</Content>
		</Layout>
	);
}

const Content = styled.div`
	display: flex;
	flex-grow: 1;
	flex-basis: 1;
	flex-direction: column;
	padding: 2rem;
	row-gap: 2rem;
	text-align: center;
`;

const Offer = styled.div`
	background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${(props) => props.imageUrl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	padding: 5rem 3rem;
	min-height: 70vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	align-items: flex-start;
	color: ${colors.white};

	h2 {
		margin: 1rem 0;
	}

	p {
		margin: 0 0 2rem 0;
		text-align: left;
	}

	${between("md", "xl")} {
		grid-template-columns: 1fr 1fr;
	}
	${down("md")} {
		justify-content: space-around;
		align-items: center;
	}
`;

const Benefits = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 0.5rem;

	${between("md", "xl")} {
		grid-template-columns: 1fr 1fr;
	}
	${down("md")} {
		grid-template-columns: 1fr;
	}
`;

export default Home;
