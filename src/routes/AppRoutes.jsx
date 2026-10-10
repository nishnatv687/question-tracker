import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router"
import Dashboard from '../pages/Dashboard'
import DsaPage from '../pages/DsaPage'
import GitGItHub from '../pages/GitGItHub'
import AddQuestion from '../pages/AddQuestion'
import TechnicalPage from '../pages/TechnicalPage'
import MainLayout from '../layout/MainLayout'

const AppRoutes = () => {
 
    const router = createBrowserRouter([
        {
            path:"/",
            element:<MainLayout/>,
            children:[
                 
        {
            path:"",
            element:<Dashboard/>
        },
        {
           path:"Dsa",
           element:<DsaPage/> 
        },
        {
            path:"Git-GitHub",
            element:<GitGItHub/>
        },
        {
            path:"Add-question",
            element:<AddQuestion/>
        },
        {
            path:"technical",
            element:<TechnicalPage/>
        }
            ]
        }
    ])

  return (<RouterProvider router={router}/>)
}

export default AppRoutes