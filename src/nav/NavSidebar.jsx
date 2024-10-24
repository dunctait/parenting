import React from 'react';
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Button,
    useDisclosure,
    IconButton,
    useBreakpointValue,
} from '@chakra-ui/react';
import {GoQuote} from "react-icons/go";
import {menuItems} from "./MenuItems.jsx";
import {NavLink, useLocation} from "react-router-dom";

const NavButton = ({isMobile, onClose, navItem, isChild}) => {
    const location = useLocation();
    const isActive = location.pathname === navItem.route;

    return (
        <Button
            as={NavLink}
            to={navItem.route}
            key={navItem.name}
            leftIcon={navItem.icon}
            variant="ghost"
            justifyContent="flex-start"
            w="full"
            onClick={() => {
                if (isMobile) onClose?.();
            }}
            style={{
                paddingLeft: isChild ? 48 : 8,
                backgroundColor: isActive ? 'var(--chakra-colors-blue-50)' : undefined,
                color: isActive ? 'var(--chakra-colors-blue-600)' : undefined,
            }}
            _hover={{
                textDecoration: 'none',
                bg: 'blue.100',
            }}
        >
            {navItem.name}
        </Button>
    );
};

const SidebarContent = ({onClose, isMobile}) => {
    return (
        <VStack spacing={4} align="stretch" w="full">
            {menuItems.map((item) => (
                <React.Fragment key={item.name}>
                    <NavButton
                        isMobile={isMobile}
                        onClose={onClose}
                        navItem={item}
                    />
                    {item.children && item.children.map((child) => (
                        <NavButton
                            key={child.name}
                            isMobile={isMobile}
                            onClose={onClose}
                            navItem={child}
                            isChild={true}
                        />
                    ))}
                </React.Fragment>
            ))}
        </VStack>
    );
};

const DesktopSidebar = () => (
    <Box
        position="fixed"
        left={0}
        w="250px"
        h="100vh"
        bg="white"
        borderRight="1px"
        borderColor="gray.200"
        p={5}
    >
        <Box borderBottomWidth="1px" pb={4} mb={4}>
            Navigation
        </Box>
        <SidebarContent isMobile={false}/>
    </Box>
);

const MobileSidebar = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <IconButton
                icon={<GoQuote/>}
                position="fixed"
                top={4}
                left={4}
                onClick={onOpen}
                aria-label="Open Menu"
            />
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader borderBottomWidth="1px">
                        Navigation
                    </DrawerHeader>
                    <DrawerBody>
                        <SidebarContent onClose={onClose} isMobile={true}/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

const NavSidebar = () => {
    const isMobile = useBreakpointValue({base: true, lg: false});
    return isMobile ? <MobileSidebar/> : <DesktopSidebar/>;
};

export default NavSidebar;