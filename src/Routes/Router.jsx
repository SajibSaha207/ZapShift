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
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashboardLayout from "../LayOut/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../Pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

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
            path:'sendparcel',
            element:<PrivateRoutes><SendParcel></SendParcel></PrivateRoutes>,
             loader: () => fetch('/public/Data/servicecenter.json').then(res => res.json())
        },
        {
            path:''
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
    },
    {
        path:'dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children:[
            {
                path: 'my-parcels',
                Component:MyParcels
            },
            {
                path:'payment/:parcelId',
                Component: Payment
            },
            {
                path: 'payment-history',
                Component: PaymentHistory
            },
            {
                path: 'payment-success',
                Component: PaymentSuccess
            },
            {
                path: 'payment-cancelled',
                Component: PaymentCancelled
            }
        ]
    }
])