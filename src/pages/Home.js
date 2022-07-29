import React from "react";

import styled from "styled-components";

//comps
import Layout from "../shared/Layout";
import Button from "../components/Button/Button";
import colors from "../styled-system/colors";

function Home() {
	const handlePreorder = (e) => {
		console.log("Preorder");
	};

	return (
		<Layout>
			<Content>
				<Offer imageUrl={"https://cdn.shopify.com/s/files/1/1791/0383/files/Audeze_MM-500_Lifestyle_Banner.jpg?v=1654277762"}>
					<h2>nazov produktu</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					</p>
					<Button type="button" text="pre-order now" size="lg" primary onClick={handlePreorder} />
				</Offer>
			</Content>
		</Layout>
	);
}

const Content = styled.div`
display: flex;
	flex-grow: 1;
`;

const Offer = styled.div`
	background-image: url(${(props) => props.imageUrl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	padding: 5rem;
	margin: 3rem 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  color: ${colors.white}
`;

export default Home;
