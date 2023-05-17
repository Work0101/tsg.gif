import {NavLink, useLocation} from "react-router-dom";
import {useState} from "react";

const NavLinkCustom = ({link, text, mouseOnBlock, matches, handelNavLinkButtonClick}) => {
    const location = useLocation()
    const [isSelect, setSelect] = useState(false)
    const hendelMouseIn = () => {
        setSelect((prevState) => !prevState)
    }
    const hendelMouseOut = () => {
        setSelect((prevState) => !prevState)
    }

    const isUnderline = () => {
        let style = 'underline-animation nav-link '
        if (!matches){
            if (!mouseOnBlock && location.pathname === link) style += " underline-active active "

            else if (location.pathname === link && !isSelect) style += " active"
            else if (location.pathname !== link && isSelect) style += " active"
            else if (location.pathname === link) style += ' underline-active active  '
        }
        else {
            style = "nav-link "
            if (!mouseOnBlock && location.pathname === link) style += "  active "

            else if (location.pathname === link && !isSelect) style += " active"
            else if (location.pathname !== link && isSelect) style += " active"
            else if (location.pathname === link) style += ' active  '
        }


        return style
    }
    return (
        <li                 >
            <NavLink
                onMouseEnter={hendelMouseIn}
                onMouseLeave={hendelMouseOut}
                onClick={()=>handelNavLinkButtonClick()}
                to={link}
                className={isUnderline}

            >
                <div data-bs-toggle={matches ? "collapse" : ""}
                     data-bs-target={matches ? ".header-nav-main nav" : ""}
                style={{height:"20px", zIndex:"20"}} >
                    {text}
                </div>
            </NavLink>

        </li>
    )
}

export default NavLinkCustom