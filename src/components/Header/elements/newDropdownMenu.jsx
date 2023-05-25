import NavLinkCustom from "./NavLink";
import SocialIcon from "./SocialIcon";
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";
import FlagComponents from "./FlagComponents";
import React from "react";

const NewDropdownMenu = ({setState, mouseOnBlock, matches, handelNavLinkButtonClick, menuIsOpen}) =>{
console.log(menuIsOpen)
    return(       <div
        className="header-nav-main header-nav-main-text-capitalize header-nav-main-effect-2 header-nav-main-sub-effect-1  d-justify-content-center"
 >
        <nav className="collapse">
            <ul className="nav nav-pills" id="mainNav"

                style={{display:"flex",width: "100%", paddingBottom: "5px", paddingTop:"0", borderTop:matches&&"1px solid #e8e8e8", backgroundColor:"#fff" }}
                onMouseEnter={() => setState(true)}
                onMouseLeave={() => setState(false)}>



                <NavLinkCustom link={"/"} text={"Home"}
                               mouseOnBlock={mouseOnBlock} matches={matches}
                               inMenu={matches}
                               handelNavLinkButtonClick={handelNavLinkButtonClick}/>
                <NavLinkCustom link={"/marketing"} text={"Marketing"}
                               mouseOnBlock={mouseOnBlock} matches={matches}
                               inMenu={matches}
                               handelNavLinkButtonClick={handelNavLinkButtonClick}/>
                <NavLinkCustom link={"/quotes"} text={"Quotes"}
                               mouseOnBlock={mouseOnBlock} matches={matches}
                               inMenu={matches}
                               handelNavLinkButtonClick={handelNavLinkButtonClick}/>
                <NavLinkCustom link={"/legal"} text={"Legal"}
                               mouseOnBlock={mouseOnBlock} matches={matches}
                               inMenu={matches}
                               handelNavLinkButtonClick={handelNavLinkButtonClick}/>
                {matches && (<><li>

                    <SocialIcon icon={<AiOutlineTwitter size={"28px"}/>}
                                title={"Twitter"}
                                inMenu={matches}
                                name={"twitter__icon"}
                                url={'http://www.twitter.com/'}/>
                </li>
                    <li>


                        <SocialIcon icon={<AiFillInstagram size={"28px"}/>}
                                    title={"Instagram"}
                                    inMenu={matches}
                                    name={"instagram__icon"}
                                    url={'http://www.instagram.com/'}/>

                    </li>
                        <div style={{borderBottom: "1px solid #e8e8e8"}}>
                            <FlagComponents matches={matches} handelNavLinkButtonClick={handelNavLinkButtonClick} menuIsOpen={menuIsOpen}/>
                        </div>
                </>)}

            </ul>

        </nav>
    </div >)
}

export default NewDropdownMenu