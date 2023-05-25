import "./style.css"

const SocialIcon = ({icon, title, url, name,inMenu}) => {

    return (    <a href={url} target="_blank"
                   title={title}
                   className={`text-color-dark text-2 ${inMenu&&"nav-link"}`} style={{padding:"0", width:"100%"}}>
            <div
                className={`${inMenu ? "new-button-auth" : `new-button ${name}`} d-flex justify-content-center align-items-center`} style={{width:"100%", border:"none"}}>
                <li className="nav-item px-1 mx-1">

                    {icon}
                </li>
            </div>
        </a>

    )
}

export default SocialIcon