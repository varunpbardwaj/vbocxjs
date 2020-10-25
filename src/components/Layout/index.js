import React from "react";
import "../../styles/layout.css";

export default function Layout(props) {
    const {children} = props;
    return(
        <div className="components-holder">
                {children}
        </div>
    )
}