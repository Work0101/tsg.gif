import React, {useState} from 'react';
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";
import AuthButton from "./elements/AuthButton.jsx";
import NavLinkCustom from "./elements/NavLink.jsx";
import SocialIcon from "./elements/SocialIcon.jsx";


import Logo from '../../assets/our_img/Orange logo background White.png'
import MenuButton from "./elements/MenuButton";
import {NavLink} from "react-router-dom";
import FlagComponents from "./elements/FlagComponents";

const Header = ({handelMenuButtonClick, menuIsOpen, matches, handelNavLinkButtonClick}) => {


    const [mouseOnBlock, setState] = useState(false)

    return (
        <header id="header" style={{height: "99px", borderBottom: "2px solid #f76205ff", boxShadow: "none"}}
                data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyStartAt': 91, 'stickySetTop': '-91px', 'stickyChangeLogo': true}">
            <div className="header-body border-0 box-shadow-none">
                <div className="border-bottom-light">
                    <div className="header-container container container-xl-custom">
                    </div>
                </div>
                <div className="header-nav-bar z-index-0">
                    <div className="container container-xl-custom">
                        <div className="header-row py-2">
                            <div className="header-column">
                                <div className="header-row">
                                    <div className="header-logo m-0">
                                        <NavLink to={'/'}>
                                            <img alt="Porto" width="160" height="80"
                                                 src={Logo} alt={"LOGO"}/>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="header-column">
                                <div className="header-row align-items-center justify-content-end">
                                    <div className="header-nav header-nav-links justify-content-start pb-1 ">
                                        <div
                                            className="header-nav-main header-nav-main-text-capitalize header-nav-main-effect-2 header-nav-main-sub-effect-1  justify-content-center">
                                            <nav className="collapse" >
                                                    <ul className="nav nav-pills" id="mainNav"
                                                        onMouseEnter={() => setState(true)}
                                                        onMouseLeave={() => setState(false)}>
                                                        <NavLinkCustom link={"/"} text={"Home"}
                                                                       mouseOnBlock={mouseOnBlock} matches={matches}
                                                                       handelNavLinkButtonClick={handelNavLinkButtonClick}/>
                                                        <NavLinkCustom link={"/company"} text={"Company"}
                                                                       mouseOnBlock={mouseOnBlock} matches={matches}
                                                                       handelNavLinkButtonClick={handelNavLinkButtonClick}/>
                                                        <NavLinkCustom link={"/services"} text={"Services"}
                                                                       mouseOnBlock={mouseOnBlock} matches={matches}
                                                                       handelNavLinkButtonClick={handelNavLinkButtonClick}/>
                                                        <NavLinkCustom link={"/gallery"} text={"Gallery"}
                                                                       mouseOnBlock={mouseOnBlock} matches={matches}
                                                                       handelNavLinkButtonClick={handelNavLinkButtonClick}/>
                                                        {matches && (<><li>


                                                            <SocialIcon icon={<AiOutlineTwitter size={"28px"}
                                                            />}
                                                                        title={"Twitter"}
                                                                        inMenu={matches}
                                                                        name={"twitter__icon"}
                                                                        url={'http://www.twitter.com/'}/>
                                                        </li>
                                                            <li  >


                                                                <SocialIcon icon={<AiFillInstagram size={"28px"}/>}
                                                                            title={"Instagram"}
                                                                            inMenu={matches}
                                                                            name={"instagram__icon"}
                                                                            url={'http://www.instagram.com/'}/>

                                                            </li></>)}

                                                    </ul>

                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-column justify-content-end align-items-center flex-row">
                                <div className="hstack gap-4   font-weight-semi-bold">
                                    {/*<div className="ms-auto d-none d-lg-inline-block">*/}
                                    {/*    <ul className="nav nav-pills">*/}
                                    {/*        <li className="nav-item dropdown">*/}
                                    {/*            <a className="nav-link text-2 p-0 text-color-dark" href="#"*/}
                                    {/*               role="button"*/}
                                    {/*               id="dropdownLanguage" data-bs-toggle="dropdown" aria-haspopup="true"*/}
                                    {/*               aria-expanded="false">*/}
                                    {/*                english*/}
                                    {/*                <i className="fas fa-angle-down"></i>*/}
                                    {/*            </a>*/}
                                    {/*            <div className="dropdown-menu dropdown-menu-end text-2"*/}
                                    {/*                 aria-labelledby="dropdownLanguage">*/}
                                    {/*                <a className="dropdown-item text-color-dark" href="#">English</a>*/}
                                    {/*                <a className="dropdown-item text-color-dark" href="#">Español</a>*/}
                                    {/*                <a className="dropdown-item text-color-dark" href="#">Française</a>*/}
                                    {/*            </div>*/}
                                    {/*        </li>*/}
                                    {/*    </ul>*/}
                                    {/*</div>*/}
                                    <div className={"header-column d-flex flex-row"}>
                                        <div className="d-none d-lg-inline-block">
                                            <ul className="nav nav-pills d-flex flex-row">
                                                <FlagComponents/>
                                                <SocialIcon icon={<AiOutlineTwitter size={"28px"}/>} title={"Twitter"}
                                                            name={"twitter__icon"} url={'http://www.twitter.com/'}/>
                                                <SocialIcon icon={<AiFillInstagram size={"28px"}/>} title={"Instagram"}
                                                            name={"instagram__icon"} url={'http://www.instagram.com/'}/>
                                            </ul>
                                        </div>

                                        <AuthButton/>
                                        <MenuButton handelMenuButtonClick={handelMenuButtonClick} dispay={menuIsOpen}
                                                    matches={matches}/>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>)
}


export default Header