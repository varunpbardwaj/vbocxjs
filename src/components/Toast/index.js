import React, { useEffect } from 'react';

function Toast(props) {

	const date = `error-${new Date().getTime()}`;

	useEffect(() => {
		const linkTag = document.createElement("link");
		linkTag.href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
		linkTag.rel = "stylesheet";
        document.head.appendChild(linkTag);
        
    }, []);

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

	function toastIcons() {
		if(props.variant === "success") {
			return "fa fa-check-circle"
		} else if(props.variant === "error") {
			return "fa fa-exclamation-triangle"
		} else if(props.variant === "warning") {
			return "fa fa-exclamation-circle"
		 }  else if(props.variant === "info"){
			return "fa fa-info-circle"
		} else {
			return ""
		}
	}

	return (
		<div
			id={`${date}`}
			style={{
				width: "100%",
				minHeight: "80px",
				backgroundColor: "#ffffff00",
				zIndex: 9999,
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
				WebkitUserSelect: "none"
			}}
		>
			<div style={{
				maxWidth: "100%",
				backgroundColor: variantColor(),
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: "15px",
				fontSize: "15px",
				fontWeight: 600,
				fontFamily: " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
				color: "#FFFFFF",
				borderRadius: "4px",
				boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)"
			}}>

			<div style={{
					width: "100%",
					height: "auto",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center"
				}}
			>
				<div style={{
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "center",
				}}>
					<i className={toastIcons()} aria-hidden="true"></i>
					<div style={{marginLeft: "10px", marginRight: "10px", textAlign: "justify", textJustify: "inter-word", padding: "5px"}}>
						{props.message}
					</div>
				</div>
				<i
					className="fa fa-times"
					aria-hidden="true"
					style={{
						cursor: "pointer"
					}}
				></i>
			</div>

			</div>

			
		</div>
	)
}

export default Toast;