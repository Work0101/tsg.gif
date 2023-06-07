import PasswordInput from "../components/Password";
import {useForm} from "react-hook-form"
const ThirdStage = () =>{
    const { handleSubmit, trigger, control, formState:{errors, isValid}} = useForm()
    return(
        <form onSubmit={()=>handleSubmit((value)=>console.log(value))} className={"form-container"} style={{maxWidth:"320px", padding:"0"}}>
            <PasswordInput type={"password1"} control={control} trigger={trigger} errors={errors} isValid={isValid}/>
            <PasswordInput type={"password2"} control={control} trigger={trigger} errors={errors} isValid={isValid}/>
        </form>
    )
}

export default ThirdStage