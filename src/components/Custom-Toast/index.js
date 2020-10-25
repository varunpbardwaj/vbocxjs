import React, { useEffect } from 'react';

    const date = `error-${new Date().getTime()}`;
    
    function CustomToast(props) {

	useEffect(() => {
		const linkTag = document.createElement("link");
		linkTag.href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
		linkTag.rel = "stylesheet";
		document.head.appendChild(linkTag);
	}, []);


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
				backgroundColor: props.backgroundColor,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: "15px",
				fontSize: "15px",
				fontWeight: 600,
				fontFamily: " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
				color: props.color,
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
                    { props.toastIcon ? props.toastIcon : null }
                    <div style={{marginLeft: "10px", marginRight: "10px", textAlign: "justify", textJustify: "inter-word", padding: "5px"}}>
						{props.message}
					</div>
				</div>
				{ 
                    props.closeIcon ?
                    <div
                        style={{
                            cursor: "pointer"
                        }}
                    >
                        {props.closeIcon}
                    </div> :
                    <i
                        className="fa fa-times"
                        aria-hidden="true"
                        style={{
                            cursor: "pointer"
                        }}
                    ></i>
                }
			</div>

			</div>
		</div>
	)
}

export default CustomToast;