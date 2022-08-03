import React from "react";
import styled from "styled-components";
import colors from "../../styled-system/colors";
import Carousel from "../Carousel/Carousel";
import Specs from "../Specs/Specs";

function Description({ ...product }) {
	const { imagesUrl, description, specs } = product;

	console.log(specs);

	return (
		<DescriptionLayout>
			<Carousel images={imagesUrl} />

			<DescribeProduct>
				<h2>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in interdum velit. Sed feugiat metus sit amet velit sagittis tempus.
					Vestibulum id suscipit nibh, vel congue odio. Fusce urna mi, rutrum lobortis tempor nec, eleifend in enim. Maecenas non ornare erat. Nam
					quis massa ac tellus auctor malesuada non eu turpis. Pellentesque aliquet mauris in lobortis facilisis. Nullam molestie ligula vitae lorem
					tempus, sed finibus elit commodo. Integer metus nisi, consectetur non mollis in, pellentesque eu enim. In commodo libero elit, fermentum
					volutpat est cursus sed. Phasellus placerat cursus tincidunt. Aliquam erat volutpat. Nulla ultricies orci dui, et efficitur risus porta ut.
					Phasellus enim urna, pulvinar non molestie at, facilisis vel tellus. Vestibulum id pretium enim.
				</h2>
				<p>{description}</p>
				<p>{description}</p>.
			</DescribeProduct>
            <Specs  specify={specs} />
		</DescriptionLayout>
	);
}

const DescriptionLayout = styled.div`
	flex-basis: 60%;
	* {
		background-color: ${colors.white};
	}
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

const DescribeProduct = styled.div`
	padding: 4rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	letter-spacing: 1px;

	h2 {
		font-size: 2rem;
		text-transform: capitalize;
	}
`;

export default Description;
