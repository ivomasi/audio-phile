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
  border-bottom: 1px solid ${colors.dark};
  padding: 2rem ;
  text-transform: capitalize;

  .nav-segment {
    width: 100%;
	  display: flex;
    justify-content: space-around;
  }

  a {
    text-decoration: none;
    color: ${colors.dark};

    :hover {
      text-decoration: underline;
    }
  }
`;

export default Navbar;
