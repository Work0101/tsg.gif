import './style.css'
import {useDispatch} from "react-redux";
import {setLanguage} from "../../../store/languageSlice";
import {useLocation, useNavigate} from "react-router-dom";

const FlagItem = ({
                      element, name, code, menuIsOpen,
                      handelNavLinkButtonClick
                  }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const location = useLocation()
    const loca = location.pathname.split("/")[2] || ""
    const relocate = () => {
        return navigate(`/${code}/${loca}`)
    }
    return (
        <li className={`d-flex ${!menuIsOpen ? "justify-content-start" : ""}  align-items-center `}
            style={{padding: "0px", borderRadius: "0", position: "relative"}}
            data-bs-toggle={menuIsOpen ? "collapse" : ""}
            data-bs-target=".header-nav-main nav"
            onClick={() => {
                localStorage.setItem("langInfo", JSON.stringify({code: code, flag: element}))
                dispatch(setLanguage({
                    LanguageCode: code,
                    LanguageName: name,
                    countryFlag: element
                }))

                if (menuIsOpen) handelNavLinkButtonClick()
                relocate()

            }}>
            <a className={`    dropdown-item new-button flags `}
               style={{
                   display: "flex", cursor: "pointer", justifyContent: menuIsOpen ? "center" : "start",
                   width: "100%",
                   // paddingLeft: menuIsOpen ? "45%" : "10px",
                   paddingRight: !menuIsOpen && "16px",
                   position:"relative"
               }}>
                <div  className={menuIsOpen?'flag-container':"flag-containerdesktop"}>
<span className="  me-3  ">
                        <div className={"d-flex justify-content-center "}></div>
                        <img src={element} height={"24px"} width={"42px"}/>
                    </span>
                    <div className="d-flex align-items-center">
                        <span className="mt-2">{name}</span>
                    </div>
                </div>

            </a>

        </li>
    )
}

export default FlagItem