import {GoHome, GoLightBulb, GoTools} from "react-icons/go";
import React from "react";

export const menuItems = [
    {
        name: 'Home',
        icon: <GoHome/>,
        route: '/'
    },
    {
        name: 'Concepts',
        icon: <GoLightBulb/>,
        route: '/concepts',
        children: [
            {name: 'Concept 1', route: '/concepts/1'},
            {name: 'Concept 2', route: '/concepts/2'}
        ]
    },
    {
        name: 'Tools',
        icon: <GoTools/>,
        route: '/tools'
    }
];
