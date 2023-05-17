import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Templates from "./tempate/index.jsx";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/SevisePage";
import CompanyPage from "./pages/CompanyPage";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Templates/>}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/gallery" element={<GalleryPage/>}/>
            <Route path="/services" element={<ServicesPage/>}/>
            <Route path="/company" element={<CompanyPage/>}/>

            <Route path="/signUp" element={<LoginPage/>}/>

            <Route path="*" element={<div>page not found</div>}/>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <div>gfkdm</div>
        </RouterProvider>
    </React.StrictMode>,
)
