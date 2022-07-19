import React from "react";
import FixedContainer from "./components/container";
import SearchBar from "./components/searchbar";
import FrontPage from "./pages/frontPage";

const routes = [
    {
        path: '/',
        element: <FrontPage/>,
        children: [
          ]
    },
    
       
]

export default routes;