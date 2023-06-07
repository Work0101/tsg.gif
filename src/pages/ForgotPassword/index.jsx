import React from "react";
import '../LoginPage/components/style.scss'
import {Outlet} from "react-router";
import {useLocation} from "react-router-dom";


const ForgotPassword = ()=>{
    let location = useLocation();
    const [title, setTitle] = React.useState("")
   React.useEffect(()=>{
       const dataset = location.pathname.split('/')
       console.log(dataset)
       if (dataset[3]==='')   setTitle("Reset Your Password")
       else if (dataset[3]==='verify')   setTitle("Security Verification")
       else if (dataset[3]==="confirm")   setTitle("Confirm Password")
   }, [location])



    return(

        <div className={"new-container"}  style={{ userSelect: "none",   minHeight: "calc(100vh - 180px)",
            display: "flex",
            alignItems: "center",

        }}>
            <div className={'new-container'}
                 style={{
                     width: "90%",
                     height: "100%",
                     maxHeight: "450px",
                     maxWidth:"500px",
                     color: "#707070",
                     alignItems: "center",

                     flexDirection: "column",
                     margin: "10px 0 ",
                     marginTop: "40px",
                     padding: "30px",
                     border: "1px solid rgb(194, 192, 192)"
                 }}>
                <h3 className={"text-color-dark"} style={{marginBottom: "30px",marginTop:"20px", fontSize: "22px"}}>{title}</h3>
                <div className={'d-flex align-items-center flex-column'} style={{width: "90%"}}>

                    <Outlet/>
                </div>

            </div>


        </div>
    )
}

export default ForgotPassword
