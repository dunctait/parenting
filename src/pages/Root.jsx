import React from 'react';
import {
    Outlet
} from "react-router-dom";
import Layout from "./Layout.jsx";

const Root = () =>
    <Layout>
        <Outlet/>
    </Layout>;

export default Root;
