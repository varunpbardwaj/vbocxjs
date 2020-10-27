import React from 'react';
import BadgeProps from "../../props/badge.props";

function Badge(props: BadgeProps) {

	const date = `${props.variant}-${new Date().getTime()}`;

	function variantColor() {
		if(props.variant === "success") {
			return "#72b55e"
		} else if(props.variant === "error") {
			return "#f54444"
		} else if(props.variant === "warning") {
			return "#e5b30d"
		} else if(props.variant === "info") {
            return "#537dbc"
        } else {
			return "#74797e"
		}
	}

    return (
        <>
            {
            props.type === "outline" ?
            <div
                id={date}
                style={{
                    display: "inline-block",
                    WebkitUserSelect: "none",
                    backgroundColor: "#FFFFFF00",
                    color: variantColor(),
                    border: `1px solid ${variantColor()}`,
                    padding: "0px 3px 1px 3px",
                    fontFamily: " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
                    fontWeight: 500,
                    fontSize: "0.72rem",
                    borderRadius: "2px"
                }}
            >
                {props.message.toUpperCase()}
            </div> :
            <div
                id={date}
                style={{
                    display: "inline-block",
                    WebkitUserSelect: "none",
                    backgroundColor: variantColor(),
                    color: "#FFFFFF",
                    padding: "0px 3px 1px 3px",
                    fontFamily: " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
                    fontWeight: 500,
                    fontSize: "0.72rem",
                    borderRadius: "2px"
                }}
            >
                {props.message.toUpperCase()}
            </div>
            }
        </>
    )
}

export default Badge;