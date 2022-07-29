import React from "react";


//css
import styled from "styled-components";
import {flexCenter} from "../../shared/styles/common.js"


//comps
import { StyledInput as Input } from "../../shared/Input/Input";
import Button from "../Button.js/Button";

function SearchBar() {
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(e);
	};

	return (
		<Search onSubmit={handleSubmit}>
			<SearchText type="text" placeholder="search"></SearchText>
			<SearchCat></SearchCat>
			<Button type="submit" text="search" />
		</Search>
	);
}
const Search = styled.form`
	${flexCenter}
	flex-basis: 66%;
`;

const SearchText = styled(Input)`
	flex-basis: 60%;
`;

const SearchCat = styled.select`
	flex-basis: 25%;
	height: 2rem;
	line-height: 2rem;
	padding: 1rem 2rem;
`;

export default SearchBar;
