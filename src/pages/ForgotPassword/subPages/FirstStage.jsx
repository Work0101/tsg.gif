import SelectTypeOfAuthorizations from "../components/SelectTypeOfAuthorizations";
import FormInput from "../components/FormInput";
import React from "react";
import {useForm} from "react-hook-form";
import {MdEmail} from "react-icons/md";
import {setResetData} from '../../../store/resetPaswordSlice'
import {useNavigate, useLocation} from "react-router-dom";
import {BsExclamationCircle, BsExclamationSquareFill, BsExclamationSquare, BsExclamationCircleFill, BsFillEnvelopeFill} from 'react-icons/bs'


const FirstPage = () =>{
    const navigate = useNavigate()
    let location = useLocation();

    const {register, handleSubmit,trigger, watch, reset, resetField, setValue,control,  formState: {errors, touchedFields, isValid }} = useForm({defaultValues: {
            login: ''}});
    const handelSubmit = (value) =>{
setResetData(value.login)
        console.log(location.pathname+"verify")
        navigate(location.pathname+"verify")

    }

    const[ selectType, setType] = React.useState({icon: <BsFillEnvelopeFill size={"23px"}/>, name: "Email", type: "email"})
    return(<>
            <form onSubmit={handleSubmit((value) => handelSubmit(value))} className={"form-container"}>
                <div className={"new-container"} style={{gap: "5px", marginBottom: "20px"}}>
                    <SelectTypeOfAuthorizations
                        reset={reset}
                        selectType={selectType}
                        setType={setType}/>
                </div>
                <FormInput  isValid={isValid} selectType={selectType} watch={watch} setValue={setValue}
                            register={register} errors={errors} trigger={trigger} touchedFields={touchedFields} control={control}    resetField={resetField}/>

                <input type={'submit'} className={`new-button-auth2  ${isValid&&'active'}`}

                       style={{textDecoration: 'none', cursor: "pointer", userSelector: "none", width: "100%"}}
                       value={'Reset Password'}/>

            </form>
    </>)
}

export default FirstPage