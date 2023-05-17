import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import {Outlet} from "react-router";
import Footer from "../components/Footer/index.jsx";
import useMediaQuery from "../hooks/useMediaQuery";

const Templates = () => {
    const matches = useMediaQuery("(max-width: 991px)")


    const [menuIsOpen, setMenuIsOpen] = useState(false)
    useEffect(() => {
        console.log(menuIsOpen)
    }, [menuIsOpen])
    const handelMenuButtonClick = (value = !menuIsOpen) => setMenuIsOpen(value)
    const handelNavLinkButtonClick = () => setMenuIsOpen(false)


    return (
        <div className='body'>
            <Header handelMenuButtonClick={() => handelMenuButtonClick()} menuIsOpen={menuIsOpen} matches={matches}
                    handelNavLinkButtonClick={handelNavLinkButtonClick}/>
            <div data-bs-toggle={menuIsOpen ? "collapse" : ""}
                 data-bs-target=".header-nav-main nav" onClick={
                () => {
                    console.log(menuIsOpen)
                    if (menuIsOpen) setMenuIsOpen(false)
                }}>
                <div>
                    <Outlet/>
                </div>

                <Footer/>
            </div>
        </div>

    )
}

export default Templates