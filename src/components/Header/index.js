import React, { useEffect } from 'react';
import Logo from "../../assets/images/logo.png";
import "../../styles/header.css";

function Header() {

    useEffect(() => {
		const linkTagFA = document.createElement("link");
		linkTagFA.href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
		linkTagFA.rel = "stylesheet";
        document.head.appendChild(linkTagFA);

        const linkTagFS = document.createElement("link");
		linkTagFS.href = "https://fonts.googleapis.com/css2?family=Yesteryear&display=swap";
		linkTagFS.rel = "stylesheet";
        document.head.appendChild(linkTagFS);
    }, []);

    return (
        <div className="containers">
            <div className="header-holder">
                            <div className="header-child">
                                <div className="logo-text-holder">
                                        <img src={Logo} alt=""  style={{marginTop: "-6px"}} width="55px" />
                                        <div className="logo-text">
                                            vbocxjs
                                        </div>
                                        <div style={{marginLeft: "-17px", fontSize: "10px", marginTop: "33px"}}>v-1.0.0</div>
                                    </div>
                            <i className="fa fa-github"></i>
                    </div>
                </div>
        </div>
        
    )
}

export default Header;