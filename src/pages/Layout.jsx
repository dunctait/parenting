import NavSidebar from "../nav/NavSidebar.jsx";
import {Box, ChakraProvider} from "@chakra-ui/react";
import React from "react";

const Layout = ({ children }) => <ChakraProvider>
    <NavSidebar />
    <Box
        ml={{ base: '55px', lg: '250px' }} // margins for sidebar
        p={4}
        transition="margin 0.3s"
    >
        { children }
    </Box>
</ChakraProvider>

export default Layout;
