import React, { useEffect } from 'react';
import CustomToastProps from "../../props/custom-toast.props";
import { render } from "react-dom";

function CustomToast(props: CustomToastProps) {

	const date = `error-${new Date().getTime()}`;
	const bannerContainerId = `vbocxjs-custom-toast-container-${new Date().getTime()}`;

	useEffect(() => {

		const bannerContainer = document.createElement("div");
		bannerContainer.id = bannerContainerId;
		document.body.appendChild(bannerContainer);

		const linkTag = document.createElement("link");
		linkTag.href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
		linkTag.rel = "stylesheet";
		document.head.appendChild(linkTag);

		render(customToastChild(), document.getElementById(bannerContainerId));

		const observer = setInterval(function () {
			if (document.getElementById(`${date}`)) {
			  clearInterval(observer);
			  if(props.animate && props.animate === "stretch-in-out" && document.getElementById(`${date}`)) {
				document.getElementById(`${date}`).animate(
					[
						{ transform: 'scale3d(1, 1, 1)' }, 
						{ transform: 'scale3d(1.2, 0.7, 1)' },
						{ transform: 'scale3d(0.7, 1.2, 1)' }, 
						{ transform: 'scale3d(1.1, 0.8, 1)' },
						{ transform: 'scale3d(0.9, 1, 1)' },
						{ transform: 'scale3d(1, 0.9, 1)' }, 
						{ transform: 'scale3d(1, 1, 1)' },
					],{
						duration: 800,
						iterations: 1
					  }
				);
			} else if(props.animate && props.animate === "fade-in-out" && document.getElementById(`${date}`)) {
				document.getElementById(`${date}`).animate(
					[
						{opacity: 0},
						{opacity: 1}
					], {
						duration: 200,
						iterations: 1
					  }
				);
		}  else if(props.animate && props.animate === "zoom-in-out" && document.getElementById(`${date}`)) {
				document.getElementById(`${date}`).animate(
					[
						{transform: 'scale3d(1.3, 1.3, 1.3)', opacity: 0},
						{transform: 'scale3d(1, 1, 1)', opacity: 1}
					], {
						duration: 400,
						iterations: 1
					}
				);
		}
	
			if(document.getElementById(`${date}`)) {
				if(props.timer) {
					setTimeout(() => {
						const removeElement = document.getElementById(`${date}`);
						if(props.animate && props.animate === "stretch-in-out" && document.getElementById(`${date}`)) {
							document.getElementById(`${date}`).animate(
								[
									{ transform: 'scale3d(1, 1, 1)' }, 
									{ transform: 'scale3d(1.25, 0.75, 1)' },
									{ transform: 'scale3d(0.75, 1.25, 1)' }, 
									{ transform: 'scale3d(1.15, 0.85, 1)' },
									{ transform: 'scale3d(0.95, 1.05, 1)' },
									{ transform: 'scale3d(1.05, .95, 1)' }, 
									{ transform: 'scale3d(1, 1, 1)' },
								],{
									duration: 800,
									iterations: 1
								}
							);
							setTimeout(() => {
								document.getElementById(bannerContainerId).removeChild(removeElement);
								document.body.removeChild(document.getElementById(bannerContainerId));
							}, 1000);
						} else if(props.animate && props.animate === "fade-in-out" && document.getElementById(`${date}`)) {
								document.getElementById(`${date}`).animate(
									[
										{opacity: 1},
										{opacity: 0}
									], {
										duration: 200,
										iterations: 1
									}
								);
								setTimeout(() => {
									document.getElementById(bannerContainerId).removeChild(removeElement);
									document.body.removeChild(document.getElementById(bannerContainerId));
								}, 150);
						}    else if(props.animate && props.animate === "zoom-in-out" && document.getElementById(`${date}`)) {
							document.getElementById(`${date}`).animate(
								[
									{transform: 'scale3d(1, 1, 1)', opacity: 1},
									{transform: 'scale3d(1.2, 1.2, 1.2)', opacity: 0}
								], {
									duration: 400,
									iterations: 1
								  }
							) 
							setTimeout(() => {
								document.getElementById(bannerContainerId).removeChild(removeElement);
								document.body.removeChild(document.getElementById(bannerContainerId));
							}, 350);
						}  else {
							if(document.getElementById(`${date}`)) {
								document.getElementById(bannerContainerId).removeChild(removeElement);
								document.body.removeChild(document.getElementById(bannerContainerId));
							}
						}
					}, props.timer);
				}
			}
			}
		}, 1);

	}, [props.timer, date]);

	function bannerTop() {
		if(props.position) {
			if(props.position === "top") {
				return ""
			} else if(props.position === "middle") {
				return "50%"
			} else if(props.position === "bottom") {
				return "0%"
			} else {
				return props.position
			}
		} else {
			return ""
		}
	}

	function removeCustomToast() {
		const removeElement = document.getElementById(`${date}`);
		if(props.animate && props.animate === "stretch-in-out" && document.getElementById(`${date}`)) {
			document.getElementById(`${date}`).animate(
				[
					{ transform: 'scale3d(1, 1, 1)' }, 
					{ transform: 'scale3d(1.2, 0.7, 1)' },
					{ transform: 'scale3d(0.7, 1.2, 1)' }, 
					{ transform: 'scale3d(1.1, 0.8, 1)' },
					{ transform: 'scale3d(0.9, 1, 1)' },
					{ transform: 'scale3d(1, 0.9, 1)' }, 
					{ transform: 'scale3d(1, 1, 1)' },
				],{
					duration: 800,
					iterations: 1
				}
			);
			setTimeout(() => {
				document.getElementById(bannerContainerId).removeChild(removeElement);
			}, 1000);
		}  else if(props.animate && props.animate === "fade-in-out" && document.getElementById(`${date}`)) {
					document.getElementById(`${date}`).animate(
						[
							{opacity: 1},
							{opacity: 0}
						], {
							duration: 200,
							iterations: 1
						}
					);
					setTimeout(() => {
						document.getElementById(bannerContainerId).removeChild(removeElement);
					}, 150);
			}   else if(props.animate && props.animate === "zoom-in-out" && document.getElementById(`${date}`)) {
				document.getElementById(`${date}`).animate(
					[
						{transform: 'scale3d(1, 1, 1)', opacity: 1},
						{transform: 'scale3d(1.2, 1.2, 1.2)', opacity: 0}
					], {
						duration: 400,
						iterations: 1
					  }
				) 
				setTimeout(() => {
					document.getElementById(bannerContainerId).removeChild(removeElement);
				}, 350);
			} else {
				alert()
				if(document.getElementById(`${date}`)) {
					document.getElementById(bannerContainerId).removeChild(removeElement);
				}
		}
	}

	function customToastChild() {
		return(
			<div
			id={`${date}`}
			style={{
				position: "fixed",
				width: "100%",
				minHeight: "80px",
				backgroundColor: "#ffffff00",
				bottom: bannerTop(),
				zIndex: 9999,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				WebkitUserSelect: "none"
			}}
		>
			<div style={{
				maxWidth: "50%",
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
                        onClick={() => {
                            removeCustomToast();
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

	return (
		<></>
	)
}

export default CustomToast;