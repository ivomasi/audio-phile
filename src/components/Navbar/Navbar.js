import React from "react";

//css
import styled from "styled-components";
import colors from "../../styled-system/colors";

//routing
import { Link } from "react-router-dom";
import { routing } from "../../routing/routing";


//comps
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import CartIcon from "../CartIcon/CartIcon";

function Navbar() {
	return (
		<Navigation>
			<div className="nav-segment">
				<Logo />
				<SearchBar />
				<CartIcon />
			</div>
			<div className="nav-segment">
				{routing.map((route, i) => {
					return (
						<Link key={i} to={route.path}>
							{route.name}
						</Link>
					);
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
	  color: ${colors.primaryColor}
    }
  }
`;

export default Navbar;
