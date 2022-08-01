import React from "react";

import styled from "styled-components";
import colors from "../../styled-system/colors.js";
import {flexCenter} from "../../shared/styles/common.js"


function Button({ type = "button", text, onClick, size="m", primary = false, rounded = false, width, complementary, ...rest}) {
	return (
		<Btn type={type} onClick={onClick} size={size} primary={primary} rounded={rounded} width={width} complementary={complementary} {...rest} >
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
    border: ${(props) => props.complementary ? `1px solid ${colors.primaryColor}` : "none"};
	width: ${(props) => props.width};
    color: ${(props) => props.complementary ? colors.primaryColor : colors.white};
    text-transform: capitalize;
    font-weight: 600;
	cursor: pointer;
    background-color: ${(props) => props.primary ? colors.primaryColor : props.complementary ? colors.white : props.disabled ? colors.grey : colors.secondaryColor};

	:hover {
		opacity: .8;
		transition: opacity .2s ease-in;
	}

	
`;

export default Button;
