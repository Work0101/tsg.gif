import React, {useState} from "react";
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";
import AuthButton from "./elements/AuthButton.jsx";
import SocialIcon from "./elements/SocialIcon.jsx";
import SmallLogo from '../../assets/our_img/logo.svg'
import MenuButton from "./elements/MenuButton";
import {NavLink} from "react-router-dom";
import NewDropdownMenu from "./elements/newDropdownMenu";
import "./elements/style.css"
import FlagComponents from "./elements/FlagComponents";

const SmallHeader = ({
                         handelMenuButtonClick,
                         menuIsOpen,
                         matches,
                         handelNavLinkButtonClick,
                         translateValue,
                     }) => {

    const [mouseOnBlock, setState] = useState(false)

    return (
<>
    {
     <header id="header"
                style={{
                    height: "62px",
                    borderBottom: "1px solid #C2C0C0FF",
                    boxShadow: "none",
                    width: "100%",
                    position: translateValue > -99 && "sticky",
                    top: 0,
                    transform: translateValue < 0 && `translate(0px, ${translateValue}px)`,
                    zIndex: 10000,

                }}
                className={`_scroll   d-flex  align-items-center justify-content-center header2`}>
            <div className={`${matches && 'header-body'} border-0  `} style={{
                display: translateValue > -61 ? "flex " : "none",

            }}>
                <div className="header-nav-bar z-index-0 d-flex d-flex  align-items-center" >
                    <div className="container container-xl-custom _scroll d-flex  align-items-center" style={{
                        justifyContent: "center",

                    }}>
                        <div className="header-row d-flex align-items-center  "
                             style={{width: "1416px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div className="header-column d-flex align-item-center">
                                <div className="header-row d-flex align-item-center">
                                    <div className="header-logo m-0 d-flex align-item-center small-logo-container"
                                         style={{}}>
                                        {<NavLink to={`/`} style={{display: "flex", alignItems: "center"}}>
                                            <img className={'logo-img2 locked-custom'} alt="Porto"
                                                 src={SmallLogo} alt={"LOGO"}/>
                                        </NavLink>}
                                    </div>
                                </div>
                            </div>

                            <div className="header-column d-flex  align-items-center">
                                <div className="header-row d-flex  align-items-center justify-content-end">
                                    <div
                                        className=" d-flex align-items-center header-nav header-nav-links justify-content-start pb-0  flex-row "
                                        style={{overflowY: "visible", padding: 0}}>
                                        <NewDropdownMenu setState={() => setState()}
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
                                            <div
                                                className="nav nav-pills d-flex flex-row justify-content-center align-items-center">
                                                <div style={{display: "flex", flexDirection: "row"}}>
                                                    <li>
                                                        <FlagComponents matches={matches}
                                                                        handelNavLinkButtonClick={handelNavLinkButtonClick}
                                                                        menuIsOpen={menuIsOpen}/>

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
        </header>
    }
</>
    )}


export default SmallHeader