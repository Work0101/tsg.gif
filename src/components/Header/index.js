import React, {useState} from 'react';
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";
import AuthButton from "./elements/AuthButton.jsx";
import SocialIcon from "./elements/SocialIcon.jsx";
import SmallHeader from "./SmallHeader.jsx";
import SmallLogo from '../../assets/our_img/logo.svg'
import MenuButton from "./elements/MenuButton";
import {NavLink} from "react-router-dom";
import NewDropdownMenu from "./elements/newDropdownMenu";
import "./elements/style.css"
import FlagComponents from "./elements/FlagComponents";

const Header = ({handelMenuButtonClick, menuIsOpen, matches, handelNavLinkButtonClick}) => {
    const [scrollValue, setScrollValue] = useState(0)


    const [mouseOnBlock, setState] = useState(false)
    const handleScroll = () => {
        setScrollValue(window.scrollY)
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {<header id="header"
                     style={{
                         height: "99px", borderBottom: "1px solid #C2C0C0FF", boxShadow: "none", width: "100%",
                     }}
                     className={`_scroll  d-flex align-items-center justify-content-center`}>
                <div className={`${matches && 'header-body'} border-0  `} style={{                         display: scrollValue < 62 ? "flex " : "none",
                }}>
                    <div className="header-nav-bar z-index-0 d-flex d-flex  align-items-center" s>
                        <div className="container container-xl-custom d-flex _scroll align-items-center" style={{
                            justifyContent: "center",
                        }}>
                            <div className="header-row d-flex align-items-center  "
                                 style={{
                                     width: "1416px",
                                     display: "flex",
                                     justifyContent: "center",
                                     alignItems: "center"
                                 }}>
                                <div className="header-column d-flex align-item-center">
                                    <div className="header-row d-flex align-item-center">
                                        <div className="header-logo m-0 d-flex align-item-center" style={{}}>
                                            {<NavLink to={`/`} style={{display: "flex", alignItems: "center"}}>
                                                <img className={'logo-img locked-custom'} alt="Porto"
                                                     src={SmallLogo} alt={"LOGO"}/>
                                            </NavLink>}
                                        </div>
                                    </div>
                                </div>

                                <div className="header-column d-flex  align-items-center">
                                    <div className="header-row d-flex  align-items-center justify-content-end">
                                        <div
                                            className=" d-flex align-items-center header-nav header-nav-links justify-content-start pb-1  flex-row "
                                            style={{overflowY: "visible"}}>
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
                                                        <SocialIcon icon={<AiOutlineTwitter size={"28px"}/>}
                                                                    title={"Twitter"}
                                                                    name={"twitter__icon"}
                                                                    url={'http://www.twitter.com/'}/>
                                                        <SocialIcon icon={<AiFillInstagram size={"28px"}/>}
                                                                    title={"Instagram"}
                                                                    name={"instagram__icon"}
                                                                    url={'http://www.instagram.com/'}/>
                                                    </div>

                                                </div>
                                            </div>

                                            <AuthButton menuIsOpen={menuIsOpen}
                                                        handelNavLinkButtonClick={handelNavLinkButtonClick}/>
                                            <MenuButton handelMenuButtonClick={handelMenuButtonClick}
                                                        dispay={menuIsOpen}
                                                        matches={matches}/>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>}
            {<SmallHeader translateValue={-162 + scrollValue}
                          handelMenuButtonClick={() => handelMenuButtonClick()} menuIsOpen={menuIsOpen}
                          matches={matches}
                          handelNavLinkButtonClick={handelNavLinkButtonClick}/>}

        </>

    )
}


export default Header