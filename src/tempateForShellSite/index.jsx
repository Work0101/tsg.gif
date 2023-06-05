import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import {Outlet} from "react-router";
import Footer from "../components/Footer/index.jsx";
import useMediaQuery from "../hooks/useMediaQuery";

import '../assets2/vendor/1bootstrap/css/bootstrap.min.css'
import '../assets2/vendor/1fontawesome-free/css/all.min.css'
import '../assets2/vendor/1animate/animate.compat.css'
// import '../assets2/vendor/1owl.carousel/assets2/owl.carousel.min.css'
// import '../assets2/vendor/1owl.carousel/assets2/owl.theme.default.min.css'
import '../assets2/vendor/1magnific-popup/magnific-popup.min.css'
import '../assets2/css/theme.css'
import '../assets2/css/theme-elements.css'
import '../assets2/css/theme-blog.css'
import '../assets2/css/theme-shop.css'
import '../assets2/css/demos/demo-renewable-energy.css'
import '../assets2/css/skins/skin-renewable-energy.css'
import '../assets2/css/custom.css'
// import "../assets2/valex/css/icons.css"
// import "../assets2/valex/plugins/bootstrap/css/bootstrap.min.css"
// import "../assets2/valex/css/style.css"
// import "../assets2/valex/css/animate.css"

const Templates = () => {
    const matches = useMediaQuery("(max-width: 991px)")


    const [menuIsOpen, setMenuIsOpen] = useState(false)
    useEffect(() => {
        console.log(menuIsOpen)
    }, [menuIsOpen])
    const handelMenuButtonClick = (value = !menuIsOpen) => {
        setMenuIsOpen(value)
        console.log("1234")
    }
    const handelNavLinkButtonClick = () => setMenuIsOpen(false)


    return (
        <div className='body' style={{display: "flex", flexDirection: "column"}}>
            <Header handelMenuButtonClick={() => handelMenuButtonClick()} menuIsOpen={menuIsOpen} matches={matches}
                    handelNavLinkButtonClick={handelNavLinkButtonClick}/>

            <div
                className={''} data-bs-toggle={menuIsOpen ? "collapse" : ""}
                style={{
                    width: "100%", margin: "0 auto", flexDirection: "column",
                    // top: "-62px",
                    position: "relative",
                    transform:"translate(0, -61px)",
                    display: "flex",
                    flexGrow: "1",

                    alignItems: "center"
                }}
                data-bs-target=".header-nav-main nav" onClick={() => {
                if (menuIsOpen) setMenuIsOpen(false)
            }}>
                <div className={"container111"}
                     style={{
                         margin: "10p auto 10px auto", maxWidth: "1440px", width: "100%", flexGrow: "1",
                     }}>
                    <Outlet/>
                </div>
                <div style={{height: "1px"}}></div>
                {/*<div style={{*/}
                {/*    width: "100%", userSelect: "none", flexShrink: 0,*/}
                {/*    transform:"translate(0, 61px)",*/}

                {/*}}>*/}
                    <Footer/>

                {/*</div>*/}
            </div>


        </div>

    )
}

export default Templates