import React from "react";
import styled from "styled-components";
import colors from "../../styled-system/colors";

function Specs({ specify }) {
	const listPropertyNames = Object.keys(specify)

	return (
		<SpecsDiv>
			<h2>specifications</h2>
			<SpecsList>
				{[...listPropertyNames].map((specName, index) => {
					delete specify["boxItems"]
					console.log(specify)
					return  <ListItem key={index}><span>{Object.keys(specify)[index]}</span>{specify[specName]}</ListItem>
				})}
			</SpecsList>
		</SpecsDiv>
	);
}

const SpecsDiv = styled.div`
	padding: 4rem;

	h2 {
		font-size: 2rem;
		text-transform: capitalize;
		margin: 2rem auto;
	}
`;

const SpecsList = styled.ul`
	padding: 0;
	margin: 0;
	list-style-type: none;

	> * {
		&:nth-child(odd) {
			background-color: ${colors.lightBlue};
		}
	}
`;
const ListItem = styled.li`
	padding: 1rem;
	display: flex;
	justify-content: space-between;

	span {
		background-color: inherit;
		font-weight: 600;
	}
`;

export default Specs;
