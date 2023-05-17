import "./style.css"
const SocialIcon = ({icon, title, url, name,inMenu}) => {

    return (    <a href={url} target="_blank"
                   title={title}
                   className={`text-color-dark text-2 ${inMenu&&"nav-link"}`} style={{padding:"0"}}>
        <div className={`${inMenu?"social-icon-in-menu":`social-icons-containers ${name}`} d-flex justify-content-center align-items-center`}>
            <li className="nav-item px-1 mx-1">

                    {icon}
            </li>
        </div>
        </a>

    )
}

export default SocialIcon