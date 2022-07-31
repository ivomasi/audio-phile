import React from "react";


//css
import styled from "styled-components";
import device from "../shared/styles/breakpoints"
//comps
import Layout from "../shared/Layout";
import Button from "../components/Button/Button";
import colors from "../styled-system/colors";
import InfoCard from "../components/InfoCard/InfoCard";

//svg icons
import Svg from "../components/Svg/Svg"
import svgImages from "../assets"

function Home() {
	const handlePreorder = (e) => {
		console.log("Preorder");
	};


	const {homePage}  = svgImages



	return (
		<Layout>
			<Content>
				<Offer imageUrl={"https://cdn.shopify.com/s/files/1/1791/0383/files/Audeze_MM-500_Lifestyle_Banner.jpg?v=1654277762"}>
					<h2>nazov produktu</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<Button type="button" text="pre-order now" size="lg" primary rounded onClick={handlePreorder} />
				</Offer>
        <h2>Shop the World’s Best Selection of Premium Headphones.</h2>
				<Benefits>

					{homePage.map((imgUrl, index) => {
						return <InfoCard key={index} IconComponent={<Svg url={imgUrl} alt="nieco" />} text="Our unparalleled 365-day return policy* gives you lots of time to fall in love with your new gear." title="LOVE AT FIRST (OR SECOND) LISTEN"/>
					})}
          {/* <InfoCard IconComponent={<Svg url={svgImages.bestPrice} alt="nieco" />} text="Our unparalleled 365-day return policy* gives you lots of time to fall in love with your new gear." title="LOVE AT FIRST (OR SECOND) LISTEN"/> */}
          {/* <InfoCard IconComponent={<BestPrice />} text="Find it cheaper elsewhere? We will match any price from an authorized dealer." title="BEST PRICE ON PREMIUM HEADPHONES, GUARANTEED"/>
          <InfoCard IconComponent={<CustomerSupport />} text="Receive live customer support from real humans who love headphones as much as you do." title="WORLD-CLASS SUPPORT EVERY STEP OF THE WAY"/>
          <InfoCard IconComponent={<Headphones />} text="We have curated only the best in premium audio from top brands like Focal, Sennheiser, and Hifiman." title="BY AUDIO LOVERS, FOR AUDIO LOVERS"/> */}
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
  padding: 2rem ;
  row-gap: 2rem;
  text-align: center;

  
`;

const Offer = styled.div`
	background-image: url(${(props) => props.imageUrl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	padding: 5rem 3rem;
  min-height: 70vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	color: ${colors.white};

  h2 {
    margin: 1rem 0;
  }

  p {
    margin: 0 0 2rem 0;
  }
`;

const Benefits = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: .5rem;

  

  @media only screen and (${device.xs}){
        grid-template-columns: 1fr;
    }
`;

export default Home;
