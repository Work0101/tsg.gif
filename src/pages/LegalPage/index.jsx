import {NavLink,useLocation} from "react-router-dom";
import {Outlet} from "react-router";
import {useSelector} from 'react-redux'
import React from "react";
import './elements/style.css'




const LegalPage = () => {

    const lang = useSelector(state => state.language.LanguageCode)
    const [mouseOnBlock, setMousePosition] = React.useState(false)

    const location = useLocation()

    const loca = location.pathname
    console.log(loca)


    const section = [{name: 'Disclaimer', url: "/" + lang + "/legal/disclaimer"},
        {
            name: 'Cookies',
            url: "/" + lang + "/legal/cookies"
        }, {name: 'Privacy', url: "/" + lang + "/legal/privacy"}, {
            name: 'Terms',
            url: "/" + lang + "/legal/terms"
        }, {name: 'GDPR', url: "/" + lang + "/legal/gdpr"}, {name: 'Contact Us', url: "/" + lang + "/legal/contactus"}]
    const isUnderline = (link) => {
        let style = 'underline-animation'
             if (mouseOnBlock&&loca === link) style += '  '
        else if (!mouseOnBlock&&loca === link) style = 'underline-active active  '

        return style
    }
    return (
        <div style={{height:"calc(100vh - 187px)", userSelect:"none",  width:"100%"}} >
            <div className={'_nav-containers'}   onMouseEnter={()=>setMousePosition(true)}
                 onMouseLeave={()=>setMousePosition(false)}>
                {section.map(items =>
                    <div className={'_nav-item '} >
                        <NavLink to={items.url}  className={()=>isUnderline(items.url)}>
                        {items.name}
                    </NavLink>
                    </div>)}
            </div>

            <Outlet/>
        </div>

    )
}

export default LegalPage