import {NavLink, useLocation} from "react-router-dom";
import {useState} from "react";
import './style.css'
import {useSelector} from "react-redux";

const NavLinkCustom = ({link, text, mouseOnBlock, matches, handelNavLinkButtonClick, inMenu}) => {
    const lang = useSelector((state) => state.language.LanguageCode)

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
            style = "before-none"
        }


        return style
    }
    return (
        <li

            onClick={() => handelNavLinkButtonClick()}
            data-bs-toggle={matches ? "collapse" : ""}
            data-bs-target={matches ? "header-nav-main nav" : ""}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: inMenu && "center",
                width: inMenu && "100%",
                padding:" 0 ",
                margin:!matches?" 0 20px 0 0px":"0"

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
                to={`/${lang}${link}`}
                className={isUnderline}
                onClick={() => handelNavLinkButtonClick()}
            >
                <div
                    onClick={() => handelNavLinkButtonClick()}
                    style={{
                        width: inMenu && "100%",
                        fontSize: "18px",
                        height: "42px",
                        padding: " 0  6px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: inMenu && "none",

                    }}
                    className={inMenu ? "new-button-auth" : "new-button"}
                >
                    {text}
                </div>
            </NavLink>

        </li>
    )
}

export default NavLinkCustom