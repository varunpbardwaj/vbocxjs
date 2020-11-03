import React, { useEffect } from 'react';
import ToastProps from "../../props/banner-toast.props";
import { render } from "react-dom";

function Toast(props: ToastProps) {

	const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'

	function idGenerator(length: number, chars: string) {
		let result = '';
		for (let i = length; i > 0; --i) {
			result += chars[Math.floor(Math.random() * chars.length)];
		}
		return result;
	}

	const uniqueid = `toasts-${idGenerator(15, input)}`;
	const bannerContainerId = `vbocxjs-toast-container-${uniqueid}`;

	useEffect(() => {

		function toastChild() {
			return (
				<div
				id={`${uniqueid}`}
				style={{
					position: "fixed",
					width: "100%",
					minHeight: "80px",
					backgroundColor: "#ffffff00",
					bottom: toastTop(),
					zIndex: 9999,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					WebkitUserSelect: "none",
					padding: "10px"
				}}
			>
				<div id={`toast-div-${uniqueid}`} style={{
					maxWidth: "50%",
					backgroundColor: variantColor(),
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "15px",
					fontWeight: 600,
					color: "#FFFFFF",
					borderRadius: "4px",
					padding: "15px",
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
						<div style={{marginLeft: "10px", marginRight: "10px",  padding: "5px"}}>
							{props.message}
						</div>
					</div>
					<i
						className="fa fa-times"
						aria-hidden="true"
						style={{
							cursor: "pointer"
						}}
						onClick={() => {
							removeToast();
						}}
					></i>
				</div>
				</div>
				{props.timer ?<div id={`timeout-view-${uniqueid}`} style={{position:"relative", marginTop: "-5px", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px",  backgroundColor: "rgba(0, 0, 0, 0.15)"}}>
					<div id={`remain-view-${uniqueid}`} style={{height: "5px", backgroundColor: "rgba(255, 255, 255, 0.4)"}}>
	
					</div>
				</div> : null
				}
			</div>
			)
		}

		const bannerContainer = document.createElement("div");
		bannerContainer.id = bannerContainerId;
		document.body.appendChild(bannerContainer);

		const linkTag = document.createElement("link");
		linkTag.href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
		linkTag.rel = "stylesheet";
		document.head.appendChild(linkTag);

		render(toastChild(), document.getElementById(bannerContainerId));

		const observer = setInterval(function () {
			if (document.getElementById(`${uniqueid}`)) {
			  clearInterval(observer);
			  if(props.animate && props.animate === "stretch-in-out" && document.getElementById(`${uniqueid}`)) {
				document.getElementById(`${uniqueid}`).animate(
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
			} else if(props.animate && props.animate === "fade-in-out") {
				document.getElementById(`${uniqueid}`).animate(
					[
						{opacity: 0},
						{opacity: 1}
					], {
						duration: 200,
						iterations: 1
					  }
				);
		}  else if(props.animate && props.animate === "zoom-in-out" && document.getElementById(`${uniqueid}`)) {
				document.getElementById(`${uniqueid}`).animate(
					[
						{transform: 'scale3d(1.3, 1.3, 1.3)', opacity: 0},
						{transform: 'scale3d(1, 1, 1)', opacity: 1}
					], {
						duration: 400,
						iterations: 1
					}
				);
		}
	
			if(document.getElementById(`${uniqueid}`)) {
				if(props.timer) {
					setTimeout(() => {
						const removeElement = document.getElementById(`${uniqueid}`);
						if(props.animate && props.animate === "stretch-in-out" && document.getElementById(`${uniqueid}`)) {
							document.getElementById(`${uniqueid}`).animate(
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
						} else if(props.animate && props.animate === "fade-in-out" && document.getElementById(`${uniqueid}`)) {
								document.getElementById(`${uniqueid}`).animate(
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
						}   else if(props.animate && props.animate === "zoom-in-out" && document.getElementById(`${uniqueid}`)) {
							document.getElementById(`${uniqueid}`).animate(
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
						} else {
							if(document.getElementById(`${uniqueid}`)) {
								document.getElementById(bannerContainerId).removeChild(removeElement);
								document.body.removeChild(document.getElementById(bannerContainerId));
							}
						}
					}, props.timer);
				}
			}
			}
		}, 1);

		const observerTimeout = setInterval(function () {
			if (document.getElementById(`toast-div-${uniqueid}`) && props.timer) {
			  clearInterval(observerTimeout);
			  const getToastWidth = document.getElementById(`toast-div-${uniqueid}`).offsetWidth;
			  document.getElementById(`timeout-view-${uniqueid}`).style.width = `${getToastWidth}px`;
			  document.getElementById(`remain-view-${uniqueid}`).animate(
				[
					{width: "100%"},
					{width: "0%"}
				], {
					duration: props.timer,
					iterations: 1,
					easing: "linear"
				  }
			);
			}
		}, 1);

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

		function toastTop() {
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
				return "0%"
			}
		}
		
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
	
		function removeToast() {
			const removeElement = document.getElementById(`${uniqueid}`);
			if(props.animate && props.animate === "stretch-in-out" && document.getElementById(`${uniqueid}`)) {
				document.getElementById(`${uniqueid}`).animate(
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
					document.body.removeChild(document.getElementById(bannerContainerId));
				}, 1000);
			}  else if(props.animate && props.animate === "fade-in-out" && document.getElementById(`${uniqueid}`)) {
						document.getElementById(`${uniqueid}`).animate(
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
				}   else if(props.animate && props.animate === "zoom-in-out" && document.getElementById(`${uniqueid}`)) {
					document.getElementById(`${uniqueid}`).animate(
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
				} else {
					if(document.getElementById(`${uniqueid}`)) {
						document.getElementById(bannerContainerId).removeChild(removeElement);
						document.body.removeChild(document.getElementById(bannerContainerId));
					}
			}
		}

	}, [bannerContainerId, props.position, props.animate, props.message, props.variant, props.timer, uniqueid]);

	useEffect(() => {
		const handleResize = () => {
			if(document.getElementById(`toast-div-${uniqueid}`) && props.timer) {
				const getToastWidth = document.getElementById(`toast-div-${uniqueid}`).offsetWidth;
				document.getElementById(`timeout-view-${uniqueid}`).style.width = `${getToastWidth}px`;
			}
		};
		window.addEventListener('resize', handleResize);
		return () => {
		  window.removeEventListener('resize', handleResize);
		};
	  });

	return (
		<></>
	)
}

export default Toast;