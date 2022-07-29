import React from "react";

import styled from "styled-components";

import {flexCenter} from "../../shared/styles/common.js"


function Button({ type = "button", text, onClick }) {
	return (
		<Btn type={type} onClick={onClick}>
			{text}
		</Btn>
	);
}

const Btn = styled.button`
	${flexCenter}
	height: 2rem;
	line-height: 2rem;
	padding: 1rem 2rem;
`;

export default Button;
