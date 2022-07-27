import React from "react";

import styled from "styled-components";

import { StyledInput } from "../../shared/Input/Input";
import { FlexCenter } from "../../shared/styles/Common";

function SearchBar() {
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(e);
	};

	return (
		<Search onSubmit={handleSubmit}>
			<SearchText type="text" placeholder="search"></SearchText>
			<SearchCat></SearchCat>
			<SubmitSearch type="submit">Search</SubmitSearch>
		</Search>
	);
}
const Search = styled.form`
	${FlexCenter}
	flex-basis: 66%;
`;

const SearchText = styled(StyledInput)`
	flex-basis: 60%;
`;

const SearchCat = styled.select`
	flex-basis: 25%;
	height: 2rem;
	line-height: 2rem;
	padding: 1rem 2rem;
`;

const SubmitSearch = styled.button`
	${FlexCenter}
	height: 2rem;
	line-height: 2rem;
	padding: 1rem 2rem;
`;

export default SearchBar;
