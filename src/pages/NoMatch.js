import React from 'react'

//comps
import {Link} from "react-router-dom"
import Layout from '../shared/Layout'
import styled from 'styled-components'
import colors from '../styled-system/colors'
import Svg from '../components/Svg/Svg'

import svg from "../assets"


function NoMatch() {

    console.log(svg)
  return (
    <Layout><NoMatchWrapper>
        <div className='icon'>
        <Svg url={svg.notFound.img} size="full"/>
        </div>
        <h2>404 not found</h2>
        <Link to="/" >home</Link>
        </NoMatchWrapper></Layout>
  )
}

const NoMatchWrapper = styled.div`
display: flex;
flex: 1;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 2rem;

.icon {
    width: 10rem;
}

h2 {
    font-size: 2rem;
}

a {
    color: ${colors.primaryColor};
    font-size: 5rem;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 10px;
    background-color: ${colors.white};

    &:hover {
    background-color: ${colors.lightGrey};

    }
}

`
export default NoMatch