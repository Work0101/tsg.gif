import React from "react";

import {useController} from "react-hook-form";
import {BsExclamationCircle} from "react-icons/bs";

const FormInput = ({selectType, watch, resetField, isValid, errors, touchedFields, control, trigger}) => {
    const name = "login"
    const [isError, setError] = React.useState("")

    const regex1 = /^[a-zA-Z0-9 !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;
    const regex2 = /^[\p{L}\p{N}._%+-]+@[\p{L}\p{N}._%+-]+\.[\p{L}\p{N}._%+-]{2,}$/u;
    const validateString = {
        hasInvalidCharacters: (value) => regex1.test(value) ? true : false,
        isValidEmail: (value) => regex2.test(value) ? true : false,
        removeWhiteSpaces: (value) => value.trim() === value
    };

    const {
        field,
        fieldState,
        fieldState: {invalid, isTouched},
    } = useController({
        name,
        control,
        rules: selectType.name === "Username" ? {
            maxLength: 25,
            minLength: 4,
            pattern: /[a-zA-Z0-9_]/,
            required: true,
            validate: {
                hasInvalidCharacters:(value) => /^[a-zA-Z0-9_]+$/.test(value) ? true : false,
                removeWhiteSpaces: (value) => value.trim() === value }
        } : {
            pattern: /^[a-zA-Z0-9 !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/, validate: validateString, required: true,
        }
    });

    React.useEffect(() => {
            trigger("login")
        },
        [field.value])
    React.useEffect(() => {
            setError("")
            resetField("login")
            resetField("password")
        },
        [selectType])


    React.useEffect(() => {
            if (isValid) setError("success-handler")
            else if (isTouched) {
                if (invalid) setError("error-handler")
                else if (!invalid) setError("success-handler")
            }

        },
        [invalid, isTouched, isValid])

    return (

        <div style={{position: "relative", width: "100%", marginBottom: "20px"}}>
            <div
                className={`form-item--container ${isError} `}>
                <div className={"form-item--svg-container"}>
                    <div>
                        {selectType.icon}
                    </div>
                </div>
                <div className={'form-item--name-container'}>
                    <input type={"text"}
                           maxLength={selectType.name === "Username" ? 25 : 70}
                           onFocus={() => trigger("login")}

                           onChange={field.onChange} // send value to hook form
                           onBlur={field.onBlur} // notify when input is touched/blur
                           value={field.value} // input value
                           name={field.name} // send down the input name
                           inputRef={field.ref}
                           style={{
                               width: "100%",
                               height: "100%",
                               borderRadius: "0 5px 5px 0"
                           }} autoComplete="off"
                           placeholder={selectType.name}/>

                </div>
            </div>
            {selectType.name === 'Email' && "login" in touchedFields &&
                errors["login"] && (errors["login"].type === 'hasInvalidCharacters' || errors["login"].type === 'pattern') &&
                <div style={{display: "flex", alignItems: "center"}}  className={'error-container'} >
                    <BsExclamationCircle size={25} color={"red"}/><div style={{marginTop: "4px", height:"25px", marginLeft: "53px", width: "100%"}}>Please enter only English</div></div>}
            {selectType.name&&"login" in touchedFields &&
                errors["login"] && (errors["login"].type === 'removeWhiteSpaces'||errors["login"].type === 'hasInvalidCharacters' ) &&
                <div style={{display: "flex", alignItems: "center"}}  className={'error-container'} >
                    <BsExclamationCircle size={25} color={"red"}/><div style={{marginTop: "4px", height:"25px", marginLeft: "53px", width: "100%"}}>Please enter a valid { (selectType.name).toLowerCase()}</div></div>}

            {selectType.name === 'Email' && "login" in touchedFields &&
                errors["login"] && (errors["login"].type === 'required' || errors["login"].type === 'maxLength' || errors["login"].type === 'minLength' ||errors["login"].type === 'isValidEmail') &&
                <div style={{display: "flex", alignItems: "center"} }  className={'error-container'} >
                    <BsExclamationCircle size={25} color={"red"}/><div style={{marginTop: "4px", height:"25px", marginLeft: "53px", width: "100%"}}>Please, enter a valid email
                    address</div></div>}


            {selectType.name === 'Username' && "login" in touchedFields && errors["login"] && (errors["login"].type === 'minLength' || errors["login"].type === 'required') &&
                <div  className={'error-container'} style={{display: "flex", alignItems: "center"}}>
                    <BsExclamationCircle size={25} color={"red"}/>
                    <div style={{marginTop: "4px", height:"25px", marginLeft: "px", width: "100%"}}>{selectType.name} must be 4 - 25
                    characters</div></div>}
            {selectType.name === 'Username' && "login" in touchedFields && errors["login"] && (errors["login"].type === 'pattern') &&
                <div  className={'error-container'} style={{display: "flex", alignItems: "center"}}>
                    <BsExclamationCircle size={25} color={"red"}/><div style={{marginTop: "4px", height:"25px", marginLeft: "53px", width: "100%"}}>Please enter only English</div></div>}


        </div>


    )
}

export default FormInput