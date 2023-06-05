import React from "react";
import {useForm} from "react-hook-form";
import {ImUser} from 'react-icons/im'

import {NavLink} from "react-router-dom"

import useLang from '../../hooks/useLang'
import SelectTypeOfAuthorizations from './components/SelectTypeOfAuthorizations'
import FormInput from './components/FormInput'
import {ImCheckmark} from 'react-icons/im'


import PasswordInput from './components/PasswordInput'

import "./components/style.scss"


const LoginPage = () => {
    const lang = useLang()
    const [isVal, setIsValid] = React.useState("")

    const [selectType, setType] = React.useState({icon: <ImUser size={"24px"}/>, name: "Username", type: "login"})
    const {register, handleSubmit,trigger, watch, reset, resetField, setValue,control,  formState: {errors, touchedFields, isValid}} = useForm({defaultValues: {
            login: '',
            password: ''
        }});
    React.useEffect(()=>{
        isValid&&setIsValid("active")
        !isValid&&setIsValid("")
    }, [isValid])


    const paramsForSelectType = () => {
        let params = {required: true}
        switch (selectType.name) {
            case "Email":
                params = Object.assign(params, {
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                })
                break;
            case "Username":
                params = Object.assign(params, {maxLength: 25, minLength: 4, pattern:/[A-Za-z0-9_]/})
                break;
            default:
                break;
        }


        return params
    }
    const [isChecked, setIsChecked] = React.useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };


    return (
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
                 }}
                 // onClick={ ()=> trigger(Object.keys(touchedFields))}
            >
                <h3 className={"text-color-dark"} style={{marginBottom: "30px",marginTop:"20px", fontSize: "22px"}}> Sign In</h3>
                <div className={'d-flex align-items-center flex-column'} style={{width: "90%"}}>
                    <form onSubmit={handleSubmit(() => console.log('submit'))} className={"form-container"}>
                        <div className={"new-container"} style={{gap: "5px", marginBottom: "20px"}}>
                            <SelectTypeOfAuthorizations
                                reset={reset}
                            selectType={selectType}
                                setType={setType}/>
                        </div>
                        <FormInput params={paramsForSelectType} isValid={isValid} selectType={selectType} watch={watch} setValue={setValue}
                                   register={register} errors={errors} trigger={trigger} touchedFields={touchedFields} control={control}    resetField={resetField}/>
                        <PasswordInput register={register}isValid={isValid} errors={errors} type={"password"} trigger={trigger} touchedFields={touchedFields} watch={watch} control={control}/>
                        <div style={{display:"flex", width:"100%", justifyContent:"space-between", alignItems:"center", height:"30px", marginBottom:"20px"}}>
                            <div className={'forgot-password'}>
                                <NavLink to={`/${lang}/reset-password/`}>
                                    Forgot password?
                                </NavLink>
                            </div>
                            <div style={{position:"relative"}}>
                                <div className={`checkbox-container ${isChecked?'active':""} forgot-password`} onClick={handleCheckboxChange}>
                                    <div className={`checkbox--svg-container ${isChecked?'active':""}`} >
                                        <ImCheckmark />
                                    </div>
                                    <div className={ `checkbox--text-container ${isChecked?'active':""}`}>
                                        Sign In (31 days)

                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type={'submit'} className={`new-button-auth2  ${isVal}`}
                               style={{textDecoration: 'none', cursor: "pointer", userSelector: "none", width: "100%"}}
                               value={'Sign In'}/>

                    </form>

                </div>

            </div>


        </div>

    )
}

export default LoginPage