import React from 'react';
import CustomBadgeProps from "../../props/custom-badge.props";

function CustomBadge(props: CustomBadgeProps) {

	const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'

	function idGenerator(length: number, chars: string) {
		let result = '';
		for (let i = length; i > 0; --i) {
			result += chars[Math.floor(Math.random() * chars.length)];
		}
		return result;
	}

	const uniqueid = `banners-${idGenerator(15, input)}`;

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
                    color: props.color,
                    border: `1px solid ${props.backgroundColor}`,
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
                    backgroundColor: props.backgroundColor,
                    color: props.color,
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

export default CustomBadge;