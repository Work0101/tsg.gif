import React from "react";
import {NavLink} from "react-router-dom"
import {useSelector} from 'react-redux'

const Column = ({data}) => {
    const lang = useSelector(state => state.language.LanguageCode)
    const handelClock = () =>{
        window.scrollTo({top:0} )
    }

    return (
        <div className=" d-flex align-items-center  justify-content-start flex-column">
            <h3 className=" text-4-5 text-color-dark" style={{marginBottom:"6px"}}>{data.title}</h3>
            <ul className="list list-unstyled mb-0  font-weight-medium">

                {data.data.map((item) =>
                    <NavLink to={`/${lang}${item.url?item.url:""}` } onClick={handelClock} >
                        <li className={"mb-0"}>
                        {/*707070*/}
                        <div className=" text-color-hover-primary new-button" style={{color:"#707070"}}>{item.name}
                        </div>
                        </li>
                    </NavLink>

               )}
            </ul>
        </div>
    )
}
export default Column