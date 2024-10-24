import {GoHome, GoLightBulb, GoTools} from "react-icons/go";
import React from "react";

const ROOT_ROUTE = '/parenting/';

export const menuItems = [
    {
        name: 'Home',
        icon: <GoHome/>,
        route: ROOT_ROUTE
    },
    {
        name: 'Concepts',
        icon: <GoLightBulb/>,
        route: ROOT_ROUTE + 'concepts',
        children: [
            {name: 'Concept 1', route: ROOT_ROUTE + 'concepts/1'},
            {name: 'Concept 2', route: ROOT_ROUTE + 'concepts/2'}
        ]
    },
    {
        name: 'Tools',
        icon: <GoTools/>,
        route: ROOT_ROUTE + 'tools'
    }
];
