import React from 'react';
import OtpInput from 'react-otp-input';
import {BsExclamationCircle, BsFillEnvelopeFill} from "react-icons/bs";
import {useLocation, useNavigate} from "react-router-dom";

const SecondStage = () => {
    const navigate = useNavigate()
    let location = useLocation();

    const [otp, setOtp] = React.useState('');
    const [notValid, setNotValid] = React.useState(false);
    const [minutes, setMinutes] = React.useState(15);
    const [seconds, setSeconds] = React.useState(0);
    const [timerActive, setTimerActive] = React.useState(true);

    const [seconds2, setSeconds2] = React.useState(4);
    React.useEffect(() => {
        if (seconds2 > 0 && timerActive) {
            setTimeout(setSeconds2, 1000, seconds2 - 1);
        } else if (seconds2 === 0) {
            setTimerActive(false);
        }
    }, [seconds2, timerActive]);

    React.useEffect(() => {
        let interval = null;

        // Уменьшаем секунды каждую секунду
        interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    clearInterval(interval);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [minutes, seconds]);


    React.useEffect(() => {

        if (!/^[a-zA-Z!@#$%^&*()_+\-=[\]{};':"|,.<>/?]*$/.test(otp)) setNotValid({text:"Plece enter only English"})
        else if (!/^[a-zA-Z0-9]+$/.test(otp)) setNotValid({text:"Invalid code"})
      if(/^[a-zA-Z0-9]+$/.test(otp)&&otp.length===6) setNotValid(false)

        console.log(notValid)

    }, [otp])
    const handelSubmit = () => {
        !notValid && otp.length === 6 && navigate("/"+location.pathname.split('/')[1] + "/reset-password/confirm")
    }
    const handel60sTimerClick = () => {
        if (seconds2 === 0) {
            setSeconds2(60)
            setTimerActive(true)
            setSeconds(0)
            setMinutes(15)
        }
    }
    const handelChangeEmailClick = () => {
        navigate("/" + location.pathname.split("/")[1] + '/reset-password')
    }

    return (
        <>
            <div className={'new-container'} style={{width: "100%", flexDirection: "column", marginTop:"20px"}}>
                <div style={{fontWeight:"600", marginBottom: "5px"}}>Email Verification Code</div>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    inputStyle={"code-verify-input"}
                    containerStyle={{display: "flex", justifyContent: "space-between", width: "100%"}}
                    renderInput={(props) => <input {...props} style={{
                        width: "40px",
                        height: "40px",
                        textAlign: "center",
                        textJustify: "center",
                        borderRadius: "5px",
                        border: "1px solid #707070",
                        fontSize: "18px",
                        fontWeight: "600"
                    }}/>}
                />
            </div>

            <div className={"new-container"} style={{marginBottom: "20px", flexDirection:"column",  justifyContent: "start"}}>
                {otp.length > 0 && !/^[a-zA-Z0-9]+$/.test(otp) && <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5px",
                    transition: "0.3s all",
                }} className={'error-container'}>
                    <BsExclamationCircle size={25} color={"red"} style={{margin: "0"}}/>
                    <div style={{
                        marginRight: "10px",
                        height: "25px",
                        marginLeft: "53px",
                        width: "100%"
                    }}>{notValid.text&&notValid.text}
                    </div>
                </div>}

                {seconds === 0 && minutes === 0 &&<div
                    style={{display: "flex", alignItems: "center"}}
                    className={'error-container'}>
                    <BsExclamationCircle size={25} style={{margin: "0"}} color={"red"}/>
                    <div style={{
                        height: "25px",
                        marginRight: "10px",
                        marginTop: "5px",

                        marginLeft: "53px",
                        width: "100%"
                    }}>Code has expired
                    </div>
                </div>}
            </div>


            <div className={"new-container"} style={{justifyContent: "space-between"}}>
                <div className={"timer-60s forgot-password"} onClick={handel60sTimerClick}>Resend code {seconds2} s
                </div>
                <div className={"timer-60s forgot-password"} onClick={handelChangeEmailClick}> Change email</div>
            </div>


            <div className={"timer-15min"} style={{marginRight: "auto", marginLeft: "10px", fontWeight:"600"}}>
                This code will be expire
                in {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
            <div onClick={() => handelSubmit()} className={`new-button-auth2  ${!notValid && 'active'}`}

                 style={{
                     textDecoration: 'none',
                     cursor: "pointer",
                     marginTop: "50px",
                     userSelector: "none",
                     fontWeight: "600",
                     width: "100%",
                     marginBottom:"20px"
                 }}>
                Verify
            </div>
        </>

    );
}


export default SecondStage