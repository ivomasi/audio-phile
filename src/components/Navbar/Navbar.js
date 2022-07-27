import React from 'react'

import styled from 'styled-components';


import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Cart from '../Cart/Cart';

function Navbar() {
  return (
    <Navigation>
        <Logo />
        <SearchBar />
        <Cart />
    </Navigation>
  );
  
}

const Navigation = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export default Navbar