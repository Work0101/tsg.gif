import {
    createBrowserRouter,
    createRoutesFromElements, Navigate, redirect,
    Route,
    RouterProvider, useNavigate,
} from "react-router-dom";

import  './assets2/vendor/1bootstrap/css/bootstrap.min.css'
import './assets2/vendor/1fontawesome-free/css/all.min.css'
import './assets2/vendor/1animate/animate.compat.css'
// import '../assets2/vendor/1owl.carousel/assets2/owl.carousel.min.css'
// import '../assets2/vendor/1owl.carousel/assets2/owl.theme.default.min.css'
import './assets2/vendor/1magnific-popup/magnific-popup.min.css'
import './assets2/css/theme.css'
import './assets2/css/theme-elements.css'
import './assets2/css/theme-blog.css'
import './assets2/css/theme-shop.css'
import './assets2/css/demos/demo-renewable-energy.css'
import './assets2/css/skins/skin-renewable-energy.css'
import './assets2/vendor/1bootstrap/css/bootstrap.min.css'
import './assets2/vendor/1fontawesome-free/css/all.min.css'
import './assets2/vendor/1animate/animate.compat.css'
// import '../assets2/vendor/1owl.carousel/assets2/owl.carousel.min.css'
// import '../assets2/vendor/1owl.carousel/assets2/owl.theme.default.min.css'
import './assets2/vendor/1magnific-popup/magnific-popup.min.css'
import './assets2/css/theme-elements.css'
import './assets2/css/theme-blog.css'
import './assets2/css/theme-shop.css'
import './assets2/css/demos/demo-renewable-energy.css'
import './assets2/css/skins/skin-renewable-energy.css'
import './assets2/css/custom.css'
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/SevisePage";
import CompanyPage from "./pages/CompanyPage";
import SignUpPage from "./pages/SignUpPage";
import React from "react";
import Templates from "./tempateForShellSite";
import LoginPage from "./pages/LoginPage";

const App =() =>{

    redirect("/en")
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                    <Route path={`/:code?`} element={<Templates/>}>


                        <Route index element={<HomePage/>}/>
                        <Route path={`/:code/gallery/`} element={<GalleryPage/>}/>
                        <Route path={`/:code/services/`} element={<ServicesPage/>}/>
                        <Route path={`/:code/company/`} element={<CompanyPage/>}/>
                        <Route path={`/:code/signup/`} element={<SignUpPage/>}/>
                        <Route path={`/:code/signin/`} element={<LoginPage/>}/>


                        <Route path="*" element={ <Navigate to={"/en"}/>}/>

                    </Route>


            </>
        )
    );
    return(
    <RouterProvider router={router} />
    )
}

export default App