import React, {useEffect, useState} from "react";
import "./style.css"

const MenuButton = ({handelMenuButtonClick , matches}) =>{


    return(matches && <div  className={" btn mx-1"}  data-bs-toggle="collapse"
                    data-bs-target=".header-nav-main nav" onClick={handelMenuButtonClick}>
        <i className="fas fa-bars"></i>
    </div>)
}

export default MenuButton