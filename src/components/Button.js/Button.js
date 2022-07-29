import React from "react";

import styled, { createGlobalStyle } from "styled-components";

import {flexCenter} from "../../shared/styles/common.js"


function Button({ type = "button", text, onClick, size="m" }) {
	return (
		<Btn type={type} onClick={onClick} size={size} >
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
	padding: 1rem 2rem;
`;

export default Button;
