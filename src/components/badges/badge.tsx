import React from 'react';
import BadgeProps from "../../props/badge.props";

function Badge(props: BadgeProps) {

	const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'

	function idGenerator(length: number, chars: string) {
		let result = '';
		for (let i = length; i > 0; --i) {
			result += chars[Math.floor(Math.random() * chars.length)];
		}
		return result;
	}

	const uniqueid = `banners-${idGenerator(15, input)}`;

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
                id={uniqueid}
                style={{
                    display: "inline-block",
                    WebkitUserSelect: "none",
                    backgroundColor: "#FFFFFF00",
                    color: variantColor(),
                    border: `1px solid ${variantColor()}`,
                    padding: "0px 3px 0px 3px",
                    fontWeight: 500,
                    fontSize: "0.72rem",
                    borderRadius: "2px"
                }}
            >
                {props.message.toUpperCase()}
            </div> :
            <div
                id={uniqueid}
                style={{
                    display: "inline-block",
                    WebkitUserSelect: "none",
                    backgroundColor: variantColor(),
                    color: "#FFFFFF",
                    padding: "0px 3px 0px 3px",
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