import React, {useState}from "react";

//css
import styled from "styled-components";
import colors from "../../styled-system/colors";

//routing
import { NavLink } from "react-router-dom";
import { routing } from "../../routing/routing";

//comps
import Logo from "../Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import CartIcon from "../CartIcon/CartIcon";
import svgImages from "../../assets";
import Svg from "../Svg/Svg";


function Navbar() {

	const [searchOpen, setsearchOpen] = useState(false)

	const handleOpenSearch = () => {
		setsearchOpen(prevValue => !prevValue)
	}

	let activeStyle = {
		textDecoration: "underline",
		color: colors.primaryColor
	};

	return (
		<Navigation>
			<div className="nav-segment">
				<Logo />
				{window.innerWidth > 809 ? <SearchBar /> : <Svg className="search-icon" url={svgImages.ui[0]} alt="search-icon" size="sm" onClick={handleOpenSearch}></Svg>}
				<CartIcon />
			</div>
			{searchOpen && <SearchBar />}
			<div className="nav-segment">
				{routing.map((route, i) => {
					return (route.name !== "home" && route.name !== "product") && <NavLink key={i}  to={route.path} style={({ isActive }) =>
					isActive ? activeStyle : undefined
				  }>
					{route.name}
				</NavLink>
				})}
			</div>
		</Navigation>
	);
}

const Navigation = styled.nav`
	width: 100%;
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid ${colors.lightGrey};
	text-transform: capitalize;
	background-color: ${colors.white};

	.nav-segment {
		width: 100%;
		display: flex;
		justify-content: space-around;
		background-color: ${colors.white};
		justify-content: space-around;
		align-items: center;

	
	}

	.nav-segment:first-child {
		background-color: ${colors.lightGrey};
	}

	.nav-segment:not(:first-child) {
		min-height: 5rem;
	}

	a {
		text-decoration: none;
		color: ${colors.dark};

		:hover {
			color: ${colors.primaryColor};
		}
	}
`;

export default Navbar;
