import "./style.css"

const SocialIcon = ({icon, title, url, name,inMenu=false}) => {

    return (    <a href={url} target="_blank"
                   title={title}
                   className={`text-color-dark text-2 ${inMenu&&"nav-link"}`} style={{padding:"0",display:"flex", alignItems:"center", width:"100%"}}>
            <div
                className={`${inMenu ? "new-button-auth" : `new-button ${name}`} d-flex justify-content-center align-items-center`} style={{width:"100%", border:"none"}}>

                    {icon}
            </div>
        </a>

    )
}

export default SocialIcon