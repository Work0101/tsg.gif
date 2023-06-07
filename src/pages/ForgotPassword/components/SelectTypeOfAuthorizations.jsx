import {ImUser} from 'react-icons/im'
import {BsTelephoneFill, BsFillEnvelopeFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import React from "react";


const SelectItem = ({data, setType, selectType}) => {
    const handlerClick = () =>{
        setType(()=> {
            return  data
        })
    }
    return (
        <div className={`select-item--container ${selectType.name===data.name?"active":""}`} style={{maxWidth:320+'px'}} onClick={handlerClick}>
            <div className={'select-item--svg-container'} >
                <div>
                    {data.icon}

                </div>
            </div>
            <div className={'select-item--name-container'}>
                {data.name}
            </div>
        </div>
    )
}
const SelectTypeOfAuthorizations = ({selectType, setType}) => {


    const data = [
        // {icon: <BsTelephoneFill size={"20px"}/>, name: "Phone", type: "phone"},
        {icon: <BsFillEnvelopeFill size={"23px"}/>, name: "Email", type: "email"}]
    return (
        <>
            {data.map(item => <SelectItem data={item} selectType={selectType}
                                          setType={setType}/>)}

        </>
    )
}
export default SelectTypeOfAuthorizations