import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOut/RootLayout";
import { Component } from "react";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../LayOut/AuthLayout";
import LogIn from "../Pages/Auth/Login/LogIn";
import Register from "../Pages/Auth/Register/Register";
import Rider from "../Pages/Rider/Rider";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        Component:RootLayout,
        children:[{
index:true,
            Component:Home,
        },
        {
            path: 'rider',
            element: <PrivateRoutes>
                <Rider></Rider>
            </PrivateRoutes>
        },
        {
            path:'coverage',
            Component:Coverage,
            loader: () => fetch('/public/Data/servicecenter.json').then(res => res.json())
        },
       
            
        ]
    },
     {
path: '/',
Component:AuthLayout,
children:[
    {
        path:'login',
        Component:LogIn,
    },
    {
        path:'register',
        Component:Register,
    }
]
    }
])