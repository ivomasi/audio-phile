import React from 'react'

import styled from 'styled-components'

const ICON_SIZE = {
    sm: "2rem",
    m: "3.5rem",
    lg: "5rem",
}

function Svg({url, alt, size = "m", onClick}) {
  return (
    <StyledIcon src={url} alt={alt} size={ICON_SIZE[size]} onClick={onClick}/>
  )
}


const StyledIcon = styled.img`
    width: ${(props => props.size )};
    height: ${(props => props.size )};
    cursor: pointer;
`

export default Svg