
import {useState} from "react";


const HomePage = () => {
    const [state, setState] = useState()
    console.log("home page rerender")
    return (<div style={{height:"100vh", width:"100vw"}}>
Home Page
    </div>)
}

export default HomePage