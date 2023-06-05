import {NavLink, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import './style.css'
import {useSelector} from "react-redux";

const NavLinkCustom = ({link, text, mouseOnBlock, matches, handelNavLinkButtonClick, inMenu}) => {
    const lang = useSelector((state) => state.language.LanguageCode)
    const handelClock = () =>{
        window.scrollTo({top:0} )
    }

    const location = useLocation()
    const [isSelect, setSelect] = useState(false)
    const hendelMouseIn = () => {
        setSelect((prevState) => !prevState)
    }
    const hendelMouseOut = () => {
        setSelect((prevState) => !prevState)
    }
    const loca = location.pathname.split("/")[2]||""
    const isUnderline = () => {
        let style = 'underline-animation nav-link '
        if (!matches) {
            if (!mouseOnBlock && "/"+loca === link) style += " underline-active active "
            else if ("/"+loca === link && !isSelect) style += " active"
            else if ("/"+loca === link) style += ' underline-active active  '
        } else {
            style = ""
            // if ("/" + loca === link && !isSelect) style += " active"

        }


        return style
    }
    return (
        <li

            onClick={() => {
                handelNavLinkButtonClick()
                handelClock()
            }}
            data-bs-toggle={matches ? "collapse" : ""}
            data-bs-target={matches ? ".header-nav-main nav" : ""}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: inMenu && "center",
                width: inMenu && "100%",
                padding:" 0 ",
                margin:!matches?" 0 14px 0 0px":"0"

            }}
        >
            <NavLink
                onMouseEnter={hendelMouseIn}
                style={{
                    display: inMenu && "flex",
                    height: `42px`,
                    alignItems: inMenu && "center",
                    justifyContent: inMenu && "center",
                    width: inMenu && "100%",
                    borderRadius: "4px",
                    padding:"0",
                    border: inMenu && "none"
                }}
                onMouseLeave={hendelMouseOut}
                to={`/${lang}${link==="/legal"?"/legal/disclaimer":`${link}`}`}
                className={isUnderline}
                onClick={() => handelNavLinkButtonClick()}
            >
                <div
                    onClick={() => handelNavLinkButtonClick()}
                    style={{
                        width: inMenu && "100%",
                        fontSize: "18px",
                        height: "42px",
                        padding: " 0  10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: inMenu && "none"

                    }}
                    className={inMenu ? `new-button-auth  ${!mouseOnBlock&&"/"+loca === link?"active":""}`  : "new-button"}
                >
                    {text}
                </div>
            </NavLink>

        </li>
    )
}

export default NavLinkCustom