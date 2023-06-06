import React from "react";
import {RiLockPasswordFill} from 'react-icons/ri'
import {useController} from "react-hook-form";

import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'


const PasswordInput = ({trigger, type, selectType, errors, control, isValid}) => {
    const name = type
    const {
        field,
        fieldState,
        fieldState: {invalid, isTouched, isDirty},
        formState: {touchedFields}

    } = useController({
        name,
        control,
        rules: {
            required: true,
            minLength: 8,
            maxLength: 40,
            pattern: /[a-zA-Z0-9_]/,
            //
            //

            validate: {
                validPassword: (value) => /^(?=.*[A-Z])(?=.*\d).+$/.test(value),
                noEnglish: (value) => /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/.test(value),
                removeWhiteSpaces: (value) => value.trim() === value,
            }
        }
    });

    const [isVisible, setIsVisible] = React.useState(false)
    const [isError, setError] = React.useState("")

    React.useEffect(() => {
            !isDirty && setError("")
            trigger(type)
        },
        [selectType])
    React.useEffect(() => {
            trigger(type)
        },
        [field.value])


    React.useEffect(() => {
        !isValid&&!isTouched&&setError("")
            if (isValid) setError("success-handler")
            else if (isTouched) {
                if (invalid) setError("error-handler")
                else if (!invalid) setError("success-handler")
            }
        },
        [field.value, isValid, isTouched])

    return (
        <div style={{position: "relative", width: "100%", marginBottom: "20px"}}>
            <div className={`form-item--container ${isError} `}>
                <div className={"form-item--svg-container"}>
                    <div>
                        <RiLockPasswordFill size={"24px"}/>
                    </div>
                </div>
                <div className={'form-item--name-container'}>
                    <input type={isVisible ? "text" : "password"} maxLength={40}
                           onChange={field.onChange} // send value to hook form
                           onBlur={field.onBlur} // notify when input is touched/blur
                           value={field.value} // input value
                           name={field.name} // send down the input name
                           onFocus={() => trigger(Object.keys(touchedFields))}

                           inputRef={field.ref} // send input ref, so we can focus on input when error appear
                           autoComplete="off"
                           style={{width: "100%", height: "100%", borderRadius: "0 5px 5px 0"}}
                           placeholder={"Password"}/>

                    <div onClick={() => setIsVisible(!isVisible)}>
                        {isVisible ? <AiFillEye size={'24px'}/> : <AiFillEyeInvisible size={"24px"}/>}
                    </div>


                </div>
            </div>
            {isTouched && errors[type] && (errors[type].type === 'maxLength' || errors[type].type === 'minLength' || errors[type].type === 'required') &&
                <div style={{marginTop: "4px", height: "25px", marginLeft: "53px", width: "100%"}}>Password must be 8 -
                    40 characters</div>}
            {isTouched && errors[type] && (errors[type].type === 'maxLength' || errors[type].type === 'validPassword' || errors[type].type === 'removeWhiteSpaces') &&
                <div style={{marginTop: "4px", height: "25px", marginLeft: "53px", width: "100%"}}>Please enter a valid
                    password</div>}
            {isTouched && errors[type] && (errors[type].type === 'noEnglish'|| errors[type].type === 'pattern')&&
                <div style={{marginTop: "4px", height: "25px", marginLeft: "53px", width: "100%"}}>Please enter only
                    English</div>}

        </div>


    )
}
export default PasswordInput