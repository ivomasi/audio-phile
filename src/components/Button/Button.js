import React from "react";

import styled from "styled-components";
import colors from "../../styled-system/colors.js";
import {flexCenter} from "../../shared/styles/common.js"


function Button({ type = "button", text, onClick, size="m", primary = false, rounded = false, width }) {
	return (
		<Btn type={type} onClick={onClick} size={size} primary={primary} rounded={rounded} width={width}>
			{text}
		</Btn>
	);
}

const BUTTON_SIZE = {
    lg: "3rem",
    m: "2rem",
    sm: "1rem",
}

const Btn = styled.button`
	${flexCenter}
	height: ${(props) => BUTTON_SIZE[props.size]};
	line-height: ${(props) => BUTTON_SIZE[props.size]};
	border-radius: ${(props) => props.rounded ? "5px" : "0"};
	padding: 1rem 2rem;
    border: none;
	width: ${(props) => props.width};
    color: ${colors.white};
    text-transform: capitalize;
    font-weight: 600;
	cursor: pointer;
    background-color: ${(props) => props.primary ? colors.primaryColor : colors.secondaryColor};

	:hover {
		opacity: .7;
		transition: opacity .2s ease-in;
	}
`;

export default Button;
