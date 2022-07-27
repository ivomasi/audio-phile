import React from "react";

import styled from "styled-components";

function Cart() {
	return (
		<Cartis>
			<img src="/img/cart-icon.png"></img>
			<span>2</span>
		</Cartis>
	);
}

const Cartis = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	align-self: center;
	position: relative;
    cursor: pointer;
    border: none;
    background-color: transparent;

	span {
		position: absolute;
		background-color: red;
		top: 0;
		right: 0;
		border-radius: 50%;
		width: 1rem;
		height: 1rem;
		justify-content: center;
		display: flex;
		align-items: center;
		color: white;
	}
`;

export default Cart;
