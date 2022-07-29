import React, { useState } from "react";

//css
import styled from "styled-components";
import { flexCenter } from "../../shared/styles/common.js";

//routing for search catergory names
import { routing } from "../../routing/routing.js";

//comps
import { StyledInput as Input } from "../../shared/Input/Input";
import colors from "../../styled-system/colors.js";
import Button from "../Button.js/Button";


function SearchBar() {
	const [selectValue, setSelectValue] = useState("all");
	const [searchTextField, setSearchTextField] = useState("");



	const handleCatChange = (e) => {
		const selectedOption = e.target.value;

		setSelectValue(selectedOption);
	};

	const handleTextChange = (e) => {
		const text = e.target.value;
		setSearchTextField(text.trim());
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const query = {
			category: selectValue,
			search: searchTextField,
		};

		console.log(query);
	};

	return (
		<Search onSubmit={handleSubmit}>
			<SearchText type="text" placeholder="search..." onChange={handleTextChange} required></SearchText>
			<SearchCat name="categories" value={selectValue} onChange={handleCatChange}>
				<option value="all">all categories</option>
				{routing.map((route, i) => {
					return (
						<option key={i} value={route.name}>
						{route.name}
						</option>
						);
					})}
				</SearchCat>
			<Button type="submit" text="search" primary size="lg" />
		</Search>
	);
}
const Search = styled.form`
	${flexCenter}
	flex-basis: 66%;
	border-radius: 0.5rem;
	overflow: hidden;
	height: 3rem;
`;

const SearchText = styled(Input)`
	flex-basis: 60%;
	height: 100%;
`;



const SearchCat = styled.select`
	flex-basis: 25%;
	box-sizing: content-box;
	height: 100%;
	line-height: 2rem;
	padding: 0 1rem;
	border: none;
	text-transform: capitalize;
	border-left: 1px solid ${colors.primaryColor};
`;

export default SearchBar;
