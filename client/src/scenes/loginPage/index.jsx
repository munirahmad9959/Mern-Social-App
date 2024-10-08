import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import Form from './Form';


const LoginPage = () => {

    const theme = useTheme();
    const isNonMobileScreen = useMediaQuery("(min-width: 1000px")



    return (
        <Box>
            <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
                <Typography fontWeight="bold" fontSize="32px" color="primary">
                    {/* clamp works like according to the screen size preferred size is middle-one if screenSize too big then right-one value if too small left-one value otherwise middle-one */}
                    ByteSocial
                </Typography>
            </Box>
            <Box width={isNonMobileScreen ? "50%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}>
                <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                    Welcome to ByteSocial, Stay connected with your friends and family.
                </Typography>
                <Form />

            </Box>
        </Box>
    )
}

export default LoginPage
