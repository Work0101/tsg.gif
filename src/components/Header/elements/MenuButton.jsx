import React from "react";
import "./style.css"

const MenuButton = ({handelMenuButtonClick , matches, dispay}) =>{


    return( matches&& <div  className={" btns new-button-auth "} style={{width:"44px", cursor:"pointer", color:dispay&&"#fff", backgroundColor:dispay&&"#f76205ff"}} data-bs-toggle="collapse"
                    data-bs-target=".header-nav-main nav" onClick={handelMenuButtonClick}>
        <i className="fas fa-bars"></i>
    </div>)
}

export default MenuButton