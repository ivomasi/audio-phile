import React from 'react'

import styled from 'styled-components'

const ICON_SIZE = {
    sm: "2rem",
    m: "3.5rem",
    l: "5rem",
}

function Svg({url, alt, size = "m"}) {
  return (
    <StyledIcon src={url} alt={alt} size={ICON_SIZE[size]}/>
  )
}


const StyledIcon = styled.img`
    width: ${(props => props.size )};
    height: ${(props => props.size )};
`

export default Svg