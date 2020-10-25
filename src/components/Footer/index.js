import React from 'react';
import "../../styles/footer.css";

function Footer() {

    return (
        <div className="footerHolder">
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "15px", opacity: 0.7, marginBottom: "10px"}}>Made with <i className="fa fa-heart heart-beat"></i> in <span role="img" aria-label="India" style={{marginLeft: "5px"}}>🇮🇳</span></div>
            <div style={{fontSize: "15px", opacity: 0.7, marginBottom: "10px"}}>Copyright © {new Date().getFullYear()} Varun Bardwaj | Released under MIT Licence.</div>
        </div>
    )
}

export default Footer;