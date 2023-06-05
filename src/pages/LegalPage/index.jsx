import {NavLink, useLocation} from "react-router-dom";
import {Outlet} from "react-router";
import {useSelector} from 'react-redux'
import React from "react";
import './elements/style.css'
import useMediaQuery from '../../hooks/useMediaQuery'
const NewNav = ({url, name, isUnderline}) => {
    const [isSelect, setIsSelect] = React.useState(false)

    return (
        <div className={'_nav-item '}
             onMouseEnter={() => setIsSelect(true)}
             onMouseLeave={() => setIsSelect(false)}>
            <NavLink to={url} className={() => isUnderline(url, isSelect)}>
                {name}
            </NavLink></div>
    )
}
const LegalPage = () => {
    const matches = useMediaQuery("(max-width: 700px)")

    const lang = useSelector(state => state.language.LanguageCode)
    const [mouseOnBlock, setMousePosition] = React.useState(false)


    const location = useLocation()

    const loca = location.pathname


    const section = [{name: 'Disclaimer', url: "/" + lang + "/legal/disclaimer"},
        {
            name: 'Cookies',
            url: "/" + lang + "/legal/cookies"
        }, {name: 'Privacy', url: "/" + lang + "/legal/privacy"}, {
            name: 'Terms',
            url: "/" + lang + "/legal/terms"
        }, {name: 'GDPR', url: "/" + lang + "/legal/gdpr"}, {name: 'Contact Us', url: "/" + lang + "/legal/contactus"}]
    const isUnderline = (link, isSelect) => {
        let style = 'underline-animation '
        if (matches){
            if (!mouseOnBlock && loca === link) style += " underline-active active "
            else if (loca === link) style += ' underline-active active '
        }
        else {
            if (!mouseOnBlock && loca === link) style += " underline-active active "
            else if (loca === link && !isSelect) style += " "
            else if (loca === link) style += ' underline-active active  '
        }



        return style
    }
    return (
        <div style={{height: "calc(100vh - 187px)",userSelect:"none", width: "100%"}}>
            <div className={'_nav-containers'}>
                <div className={"d-flex justify-content-center"}
                     style={{userSelect: "none", flexWrap: "wrap", margin: "0 10px"}}
                     onMouseEnter={() => setMousePosition(true)}
                     onMouseLeave={() => setMousePosition(false)}>
                    {section.map(items => <NewNav name={items.name} url={items.url} mouseOnBlock={mouseOnBlock}
                                                  isUnderline={isUnderline}/>)}
                </div>

            </div>

            <Outlet/>
        </div>

    )
}

export default LegalPage