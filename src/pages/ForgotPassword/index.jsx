import React from "react";
import {useForm} from 'react-hook-form'
import {ImUser} from 'react-icons/im'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import SelectTypeOfAuthorizations from './components/SelectTypeOfAuthorizations'
import '../LoginPage/components/style.scss'
import FormInput from './components/FormInput'

const ForgotPassword = ()=>{
    const {register, handleSubmit,trigger, watch, reset, resetField, setValue,control,  formState: {errors, touchedFields, isValid }} = useForm({defaultValues: {
            login: '',
            password: ''
        }});

    const isVal = isValid

    const[ selectType, setType] = React.useState({icon: <MdEmail size={"26px"}/>, name: "Email", type: "email"})

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
                <h3 className={"text-color-dark"} style={{marginBottom: "30px",marginTop:"20px", fontSize: "22px"}}>Reset Your Password</h3>
                <div className={'d-flex align-items-center flex-column'} style={{width: "90%"}}>
                    <form onSubmit={handleSubmit(() => console.log('submit'))} className={"form-container"}>
                        <div className={"new-container"} style={{gap: "5px", marginBottom: "20px"}}>
                            <SelectTypeOfAuthorizations
                                reset={reset}
                                selectType={selectType}
                                setType={setType}/>
                        </div>
                        <FormInput  isValid={isValid} selectType={selectType} watch={watch} setValue={setValue}
                                   register={register} errors={errors} trigger={trigger} touchedFields={touchedFields} control={control}    resetField={resetField}/>
                        {/*<PasswordInput register={register}isValid={isValid} errors={errors} type={"password"} trigger={trigger} touchedFields={touchedFields} watch={watch} control={control}/>*/}
                        <div style={{display:"flex", width:"100%", justifyContent:"space-between", alignItems:"center", height:"30px", marginBottom:"20px"}}>

                            {/*<div style={{position:"relative"}}>*/}
                            {/*    <div className={`checkbox-container ${isChecked?'active':""} forgot-password`} onClick={handleCheckboxChange}>*/}
                            {/*        <div className={`checkbox--svg-container ${isChecked?'active':""}`} >*/}
                            {/*            <ImCheckmark />*/}
                            {/*        </div>*/}
                            {/*        <div className={ `checkbox--text-container ${isChecked?'active':""}`}>*/}
                            {/*            Sign In (31 days)*/}

                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <input type={'submit'} className={`new-button-auth2  ${isVal}`}
                               style={{textDecoration: 'none', cursor: "pointer", userSelector: "none", width: "100%"}}
                               value={'Sign In'}/>

                    </form>

                </div>

            </div>


        </div>

        // <div>
        //     Reset Your Password
        // </div>
    )
}

export default ForgotPassword
