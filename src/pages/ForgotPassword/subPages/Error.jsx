import React from "react";
import {BsExclamationCircleFill} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


const Error = () => {
    const lang = useSelector((state)=>state.language.LanguageCode)
    return (
        <div className={"new-container"} style={{
            userSelect: "none", minHeight: "calc(100vh - 180px)",
            display: "flex",
            alignItems: "center",

        }}>
            <div className={'new-container'}
                 style={{
                     width: "90%",
                     height: "100%",
                     maxHeight: "450px",
                     maxWidth: "500px",
                     color: "#707070",
                     alignItems: "center",

                     flexDirection: "column",
                     margin: "10px 0 ",
                     marginTop: "40px",
                     padding: "30px",
                     border: "1px solid rgb(194, 192, 192)"
                 }}>

                <div className={'d-flex align-items-center flex-column'} style={{width: "90%"}}>


                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%"
                    }}>
                        <h3 className={"text-color-dark"}
                            style={{marginBottom: "50px", marginTop: "20px", fontSize: "22px"}}>Password Change Failed</h3>
                        <div className={`select-item--container active`} style={{maxWidth: 100 + "%", background:"#fff", boxShadow:"none"}}>
                            <div className={'select-item--svg-container'}>
                                <div>
                                    <BsExclamationCircleFill size={24}/>
                                </div>
                            </div>
                            <div className={'select-item--name-container'}
                                 style={{width: "100%!important", fontSize: "16px"}}>
                                Failed to execute. Please try again.
                            </div>
                        </div>
                        <NavLink className={`new-button-auth2 active  `}
                                 to={"/"+lang+"/reset-password"}
                                 style={{
                                     textDecoration: 'none',
                                     cursor: "pointer",
                                     marginTop: "50px",
                                     userSelector: "none",
                                     fontWeight: "600",
                                     width: "100%",
                                     marginBottom: "20px"
                                 }}>
                            Reset Password
                        </NavLink>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Error