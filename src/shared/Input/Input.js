import React from 'react'

import styled from 'styled-components'

function Input({placeholder = ""}) {
  return (
    <StyledInput type="text" placeholder={placeholder}/>
  )
}

export const StyledInput = styled.input`
    height: 2rem;
	line-height: 2rem;
	padding: 1rem 2rem;

    :focus {
		outline: none;
	}

	:placeholder-shown {
		text-transform: capitalize;
	}
`

export default Input