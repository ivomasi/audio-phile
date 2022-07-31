import React from 'react'


import styled from 'styled-components'

import ProductGridItem from './ProductGridItem/ProductGridItem'

function ProductGrid({products}) {

  return (
    products && <Grid>
        {products.map((item, index) => {
            return <ProductGridItem key={index} product={item}></ProductGridItem>
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid
`

export default ProductGrid