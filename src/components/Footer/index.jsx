import "./elements/style.css"

import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";
import {useSelector} from "react-redux"
import "../Header/elements/style.css"

import Column from "./elements/Column"
import React from "react";
import SocialIcons from "../../components/Header/elements/SocialIcon"

const Footer = () => {
       const lang = useSelector(state => state.language.LanguageCode)

    const dataForSocialIcons = [
        {
            icon: <AiOutlineTwitter size={"28px"}/>,
            url: "http://www.twitter.com/",
            name: "twitter__icon",
            title: "Twitter"
        },
        {
            icon: <AiFillInstagram size={"28px"}/>,
            url: "http://www.instagram.com/",
            name: "instagram__icon",
            title: "Instagram"
        },
        {
            icon: <FaTelegramPlane size={"28px"}/>,
            url: "http://www.telegram.com/",
            name: "telegram__icon",
            title: "Telegram"
        }, {
            icon: <FaTelegramPlane size={"28px"}/>,
            url: "http://www.telegram.com/",
            name: "telegram__icon",
            title: "Telegram"
        }, {
            icon: <FaTelegramPlane size={"28px"}/>,
            url: "http://www.telegram.com/",
            name: "telegram__icon",
            title: "Telegram"
        },]

    const data = [{title: "Home", data: [{name:"Home", url:"/"},{name:"Marketing", url:"/marketing"},{name:"Quotes", url:"/quotes"},{name:"FAQ", url:"/faq"}]},
        {
            title: "Legal", data: [{name:"Disclaimer", url:"/legal/disclaimer"},{name:"Cookies", url:`/legal/cookies`}, {name:"Privacy", url:"/legal/privacy"},{name:"Terms", url:"/legal/terms"}]
        }, {
            title: "Legal", data: [{name:"Contact Us", url:"/legal/contactus"},{name:"GDPR", url:"/legal/gdpr"}]
        },]
    return (<footer id="footer" className="position-relative bg-quaternary "
                    style={{borderTop: "1px solid #C2C0C0FF", userSelect:"none",}}>
            <div className="   container " style={{paddingTop:"17px", paddingBottom:"10px"}}>

                <div className={"grid grid-template"}>
                    {data.map(item => <Column data={item} />)}
                    <div className=" d-flex  flex-column align-items-center">
                        <h3 className="text-4-5 text-color-dark" style={{marginBottom:"6px"}}>Follow US</h3>
                        <div className="list list-unstyled  font-weight-medium  "
                             style={{display: "grid", gridTemplateColumns: "repeat(2, 42px)"}}>

                            {dataForSocialIcons.map(items => <SocialIcons {...items}/>)}
                        </div>
                    </div>


                </div>

            </div>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTop: "1px solid #C2C0C0FF"
            }}>
                <p className="text-left text-1 mb-0" style={{color:"#707070"}}>TSG.GIFT © 2023. All Rights Reserved.</p>
            </div>

        </footer>

    )
}

export default Footer