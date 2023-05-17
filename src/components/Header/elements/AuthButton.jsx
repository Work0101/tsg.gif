import '../elements/style.css'
import {NavLink} from "react-router-dom";

const LinkComponenе = ({link, text}) =>{
return(
    <>
    <NavLink to={"/"+link} style={{ textDecoration: 'none' }}>

    <div className='btn mx-1'  >
        {text}
    </div>
    </NavLink></>
)
}
const AuthButton = () => {
    return (<>
        <LinkComponenе link={"signIn"} text={"Sign In"}/>
        <LinkComponenе link={"signUp"} text={"Sign Up"}/>



    </>)
}



export default AuthButton