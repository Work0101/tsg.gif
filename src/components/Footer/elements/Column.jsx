import React from "react";
import {NavLink} from "react-router-dom"
import {useSelector} from 'react-redux'

const Column = ({data, index}) => {
    const lang = useSelector(state => state.language.LanguageCode)
    const handelClock = () =>{
        window.scrollTo({top:0} )
    }
    console.log(index%2>0)

    return (
        <div className=" d-flex align-items-center  justify-content-start flex-column" style={{ }}>
            <h3 className="  text-color-dark" style={{marginBottom:"6px" , userSelect:"none" , fontSize:"18px"}}>{data.title}</h3>
            <ul className="list list-unstyled mb-0  font-weight-medium" style={{}}>

                {data.data.map((item) =>
                    <NavLink to={`/${lang}${item.url?item.url:""}` }  onClick={handelClock} >
                        <li className={"mb-0" }  style={{}}>
                        <div className={` text-color-hover-primary new-button`} style={{color:"#707070", userSelect:"none"}}>{item.name}
                        </div>
                        </li>
                    </NavLink>

               )}
            </ul>
        </div>
    )
}
export default Column