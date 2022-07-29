import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

function Logo() {
	return (
		<Link to="/">
			<Image src="/img/logo.png" />
		</Link>
	);
}

const Image = styled.img`
	height: 7rem;
`;

export default Logo;
