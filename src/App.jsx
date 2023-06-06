import {
    createBrowserRouter,
    createRoutesFromElements, Navigate, redirect,
    Route,
    RouterProvider, useNavigate,
} from "react-router-dom";

import {useSelector} from "react-redux"

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
import './main.scss'
// import  "assets2/js/custom.js"
// import "./assets2/vendor/plugins/js/plugins.min.js"
//
// import ".assets2/js/theme.js"
//
// import "./assets2/js/demos/demo-renewable-energy.js"
// import "./assets2/js/views/view.contact.js"
//
// import "./assets2/js/custom.js"
//
// import "./assets2/js/theme.init.js"


// pdf import
import pdf1 from './assets/pdf/1.pdf'
import pdf2 from './assets/pdf/2.pdf'
import pdf3 from './assets/pdf/3.pdf'
import pdf4 from './assets/pdf/4.pdf'
import pdf5 from './assets/pdf/5.pdf'


import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import ServicesPage from "./pages/SevisePage";
import CompanyPage from "./pages/CompanyPage";
import SignUpPage from "./pages/SignUpPage";
import React from "react";
import Templates from "./tempateForShellSite";
import LoginPage from "./pages/LoginPage";
import FAQPage from "./pages/FAQPage";
import Disclaimer from './pages/LegalPage/elements/Disclaimer'
import ForgotPassword from './pages/ForgotPassword'

const App =() =>{
const lang = useSelector(state =>state.language.LanguageCode)
    redirect("/"+lang)
    const router = createBrowserRouter(
        createRoutesFromElements(

                    <Route path={`/:code?`} element={<Templates/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path={`/:code/legal/`} element={<LegalPage/>}>
                            <Route path={`disclaimer`} element={<Disclaimer pdf={pdf1}/>}/>
                            <Route path={`cookies`} element={<Disclaimer  pdf={pdf2}/>}/>
                            <Route path={`privacy`} element={<Disclaimer  pdf={pdf3}/>}/>
                            <Route path={`terms`} element={<Disclaimer  pdf={pdf4}/>}/>
                            <Route path={`gdpr`} element={<Disclaimer  pdf={pdf5}/>}/>
                            <Route path={`contactus`} element={<div>Contact Us</div>}/>
                        </Route>

                        <Route path={`/:code/quotes/`} element={<ServicesPage/>}/>
                        <Route path={`/:code/marketing/`} element={<CompanyPage/>}/>
                        <Route path={`/:code/signup/`} element={<SignUpPage/>}/>
                        <Route path={`/:code/signin/`} element={<LoginPage/>}/>
                        <Route path={`/:code/faq/`} element={<FAQPage/>}/>
                        <Route path={`/:code/reset-password/`} element={<ForgotPassword/>}>

                        </Route>
                        <Route path="*" element={ <Navigate to={"/en"}/>}/>


                    </Route>



        )
    );
    return(
    <RouterProvider router={router}/>
    )
}

export default App