import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function ProductGridItem({product}) {
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState({})

    useEffect(() => {
        setLoading(prevLoad => !prevLoad)

        setItem(product)


        setLoading(prevLoad => !prevLoad)


    },[product])

  return (
    !loading && <ItemWrapper>
                    <ItemImage src={item.previewImage}/>

        <div className='product'>

        </div>
        <div className='image'>

        </div>
    </ItemWrapper>

  )
}

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid black;

`

const ItemImage = styled.img`
    width: 3rem;
    height: 3rem;
`



export default ProductGridItem