import React from 'react'

import Box from '@mui/material/Box';

function Layout({children}) {
  return (
    <Box sx={layoutStyles}>
        {children}
    </Box>
  )
}

const layoutStyles = {
    display: "flex",
    minHeight: "100vh",
    minWidth: "100vw",

}

export default Layout