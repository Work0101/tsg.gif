import React, {useState} from 'react';
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";
import {useSelector} from 'react-redux'
import AuthButton from "./elements/AuthButton.jsx";
import SocialIcon from "./elements/SocialIcon.jsx";
import Logo from '../../assets/our_img/Orange logo background White.png'
import LogoSvg from '../../assets/our_img/Orange_logo_background_White.svg'

import MenuButton from "./elements/MenuButton";
import {NavLink} from "react-router-dom";
import NewDropdownMenu from "./elements/newDropdownMenu";
import "./elements/style.css"
import FlagComponents from "./elements/FlagComponents";

const Header = ({handelMenuButtonClick, menuIsOpen, matches, handelNavLinkButtonClick}) => {

    const [mouseOnBlock, setState] = useState(false)

    return (
        <header id="header" style={{height: "99px", borderBottom: "1px solid #C2C0C0FF", boxShadow: "none"}}
                data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyStartAt': 91, 'stickySetTop': '-91px', 'stickyChangeLogo': true}  ">
            <div className="header-body border-0 ">
                <div className="border-bottom-light">
                    <div className="header-container container container-xl-custom">
                    </div>
                </div>
                <div className="header-nav-bar z-index-0 d-flex" >
                    <div className="container container-xl-custom"  style={{ display:"flex", justifyContent:"center"}}>
                        <div className="header-row py-2 " style={{width:"1416px"}}>
                            <div className="header-column">
                                <div className="header-row">
                                    <div className="header-logo m-0">
                                        <NavLink to={`/`}>
                                            <img alt="Porto" width="160" height="80"
                                                 src={LogoSvg} alt={"LOGO"}/>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="header-column">
                                <div className="header-row align-items-center justify-content-end">
                                    <div className="header-nav header-nav-links justify-content-start pb-1 d-flex flex-row align-items-center "
                                         style={{overflowY: "visible"}}>
                                        <NewDropdownMenu setState={()=>setState()}
                                                         mouseOnBlock={mouseOnBlock}
                                                         matches={matches}
                                                         handelNavLinkButtonClick={handelNavLinkButtonClick}
                                                         menuIsOpen={menuIsOpen}/>
                                    </div>
                                </div>
                            </div>
                            <div className="header-column d-flex justify-content-end align-items-center flex-row">
                                <div className=" gap-4   font-weight-semi-bold">
                                    <div className={"header-column d-flex flex-row"}>
                                        <div className="d-none d-lg-inline-block ">
                                            <div className="nav nav-pills d-flex flex-row justify-content-center align-items-center">
                                                <div style={{display:"flex", flexDirection:"row"}}>
                                                    <li>
                                                        <FlagComponents  matches={matches} handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>

                                                    </li>
                                                    <SocialIcon icon={<AiOutlineTwitter size={"28px"}/>} title={"Twitter"}
                                                                name={"twitter__icon"} url={'http://www.twitter.com/'}/>
                                                    <SocialIcon icon={<AiFillInstagram size={"28px"}/>} title={"Instagram"}
                                                                name={"instagram__icon"} url={'http://www.instagram.com/'}/>
                                                </div>

                                            </div>
                                        </div>

                                        <AuthButton menuIsOpen={menuIsOpen}
                                                    handelNavLinkButtonClick={handelNavLinkButtonClick}/>
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