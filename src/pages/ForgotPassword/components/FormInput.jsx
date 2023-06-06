import React from "react";

import {useController} from "react-hook-form";

const FormInput = ({selectType, resetField, isValid,  errors, touchedFields, control, trigger}) => {
    const name = "login"
    const [isError, setError] = React.useState("")

    // Regular expression to match any character except English letters, digits, and specified special characters
    const regex1 = /^[a-zA-Z0-9 !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;

    // Regular expression to match email address
    const regex2 = /^[\p{L}\p{N}._%+-]+@[\p{L}\p{N}._%+-]+\.[\p{L}\p{N}._%+-]{2,}$/u;

    const validateString = {
        hasInvalidCharacters: (value) => regex1.test(value) ? true : false,
        isValidEmail: (value) => regex2.test(value) ? true : false
    };

    const {
        field,
        fieldState: {invalid, isTouched},
    } = useController({
        name,
        control,
        rules: selectType.name === "Username" ? {
            maxLength: 25,
            minLength: 4,
            pattern: /[A-Za-z0-9_]/,
            required: true
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

        <div style={{position: "relative", width: "100%", marginBottom: "50px"}}>
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

                           {...field}
                           style={{
                               width: "100%",
                               height: "100%",
                               borderRadius: "0 5px 5px 0"
                           }} autoComplete="off"
                           placeholder={selectType.name}/>

                </div>
            </div>
            {selectType.name === 'Email' && "login" in touchedFields &&
                errors["login"] && (errors["login"].type === 'hasInvalidCharacters'|| errors["login"].type === 'pattern') &&
                <div style={{marginTop: "4px", height:"25px", marginLeft: "53px", width: "100%"}}>Please enter only English</div>}

            {selectType.name === 'Email' && "login" in touchedFields &&
                errors["login"] && (errors["login"].type === 'required' || errors["login"].type === 'maxLength' || errors["login"].type === 'minLength' ||errors["login"].type === 'isValidEmail') &&
                <div style={{marginTop: "4px", height:"25px", marginLeft: "53px", width: "100%"}}>Please, enter a valid email
                    address</div>}
            {selectType.name === 'Username' && "login" in touchedFields && errors["login"] && (errors["login"].type === 'minLength' || errors["login"].type === 'required') &&
                <div style={{marginTop: "4px", height:"25px", marginLeft: "53px", width: "100%"}}>{selectType.name} must be 4 - 25
                    characters</div>}
            {selectType.name === 'Username' && "login" in touchedFields && errors["login"] && (errors["login"].type === 'pattern') &&
                <div style={{marginTop: "4px", height:"25px", marginLeft: "53px", width: "100%"}}>Please enter only English</div>}


        </div>


    )
}

export default FormInput