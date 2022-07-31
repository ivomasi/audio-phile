import React from "react";

import styled from "styled-components";

import colors from "../../styled-system/colors";


function CartIcon() {
	return (
		<Cartis>
			<img src="/img/cart-icon.png" alt="cart icon"></img>
			<span>2</span>
		</Cartis>
	);
}

const Cartis = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: center;
	position: relative;
    cursor: pointer;
    border: none;
    background-color: transparent;

	span {
		position: absolute;
		background-color: ${colors.secondaryColor};
		top: 0;
		right: 0;
		border-radius: 50%;
		width: 1rem;
		height: 1rem;
		justify-content: center;
		display: flex;
		align-items: center;
		color: ${colors.white};
	}

    img {
        width: 3rem;
        height: 3rem;
    }
`;

export default CartIcon;
