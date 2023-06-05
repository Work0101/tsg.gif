import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const LinkComponenе = ({link, text, menuIsOpen, handelNavLinkButtonClick}) => {
    const path = useLocation().pathname
    const navigate = useNavigate()


    return (
        <>

                <div className='new-button-auth ' data-bs-toggle={menuIsOpen ? "collapse" : ""}
                     data-bs-target=".header-nav-main nav" onClick={
                    () => {
                        navigate(link)
                        if (menuIsOpen) handelNavLinkButtonClick()
                    }} style={{background:link===path&&"#f76205ff", color: link===path&&"#ffffff", textDecoration: 'none', cursor:"pointer"}}>
                    {text}
            </div></>
    )
}
const AuthButton = ({menuIsOpen, handelNavLinkButtonClick}) => {
    const lang = useSelector((state) => state.language.LanguageCode)

    return (<div className={"AuthButton"}>
        <LinkComponenе link={`/${lang}/signin`} text={"Sign In"}
                       menuIsOpen={menuIsOpen} handelNavLinkButtonClick={handelNavLinkButtonClick}/>
        <LinkComponenе link={`/${lang}/signup`} text={"Sign Up"}
                       menuIsOpen={menuIsOpen} handelNavLinkButtonClick={handelNavLinkButtonClick}/>


    </div>)
}



export default AuthButton