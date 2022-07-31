import React from "react";

import styled from "styled-components";


import colors from "../../styled-system/colors";

function InfoCard({ IconComponent, title, text }) {
	return (
		<Card>
			<div className="sector">{IconComponent}</div>
			<div className="sector">
				<h2>{title}</h2>
				<p>{text}</p>
			</div>
		</Card>
	);
}

const Card = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 1rem;
    min-height: 20rem;
    justify-content: space-between;
    background-color: ${colors.white};
    border-radius: 5px;

    svg {
        width: 100px;
        height: 100px;
    }
    

    .sector {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-basis: 100%;
    }

    .sector:not(:first-child) {
        justify-content: space-around;

    }
	
    h2 {
		font-size: 1rem;
	} p {
        font-size: 0.8rem;
    }
`;

export default InfoCard;
