import React from "react";

import styled from "styled-components";

function SearchBar() {
	return (
		<Search>
			<SearchText type="text" placeholder="search"></SearchText>
			<SearchCat></SearchCat>
		</Search>
	);
}

const SearchText = styled.input`
    flex-basis: 60%;
    height: 2rem;
    line-height: 2rem;
    padding: 1rem 2rem;

    :focus {
        outline: none;
    }

    :placeholder-shown {
        text-transform: capitalize;
    }
`;

const SearchCat = styled.select`
    flex-basis: 25%;
    height: 2rem;
    line-height: 2rem;
    padding: 1rem 2rem;

`;

const Search = styled.div`
    flex-basis: 66%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default SearchBar;
