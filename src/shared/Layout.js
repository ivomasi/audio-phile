import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";

function Layout({ children }) {
	return (
		<Lay>
			<Navbar />
			{children}
		</Lay>
	);
}

const Lay = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

export default Layout;
