
const FlagItem = ({element, name}) => {
    return (
        <a className="dropdown-item d-flex flag-item" style={{cursor:"pointer"}}>
                    <span className="avatar  me-3 align-self-center bg-transparent">
                        <img src={element} width={"54px"}/>
                    </span>
            <div className="d-flex">
                <span className="mt-2">{name}</span>
            </div>
        </a>
    )
}

export default FlagItem