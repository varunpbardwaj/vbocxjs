import React, { useEffect } from 'react';
import BannerProps from "../../props/banner-toast.props";
import { render } from "react-dom";

function Banner(props: BannerProps) {

	const date = `banner-${new Date().getTime()}`;
	const bannerContainerId = `vbocxjs-banner-container-${new Date().getTime()}`;

	useEffect(() => {

		const bannerContainer = document.createElement("div");
		bannerContainer.id = bannerContainerId;
		document.body.appendChild(bannerContainer);

		const linkTag = document.createElement("link");
		linkTag.href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
		linkTag.rel = "stylesheet";
		document.head.appendChild(linkTag);

		render(bannerChild(), document.getElementById(bannerContainerId));

		const observer = setInterval(function () {
			if (document.getElementById(`${date}`)) {
			  clearInterval(observer);
			  if(props.animate && props.animate === "stretch-in-out") {
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
			} else if(props.animate && props.animate === "zoom-in-out" && document.getElementById(`${date}`)) {
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
									{ transform: 'scale3d(.95, 1.05, 1)' },
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
										document.body.removeChild(document.getElementById(bannerContainerId));
									}, 150);
							}  else if(props.animate && props.animate === "zoom-in-out" && document.getElementById(`${date}`)) {
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
							} else {
								if(document.getElementById(`${date}`)) {
									document.getElementById(bannerContainerId).removeChild(removeElement);
									document.body.removeChild(document.getElementById(bannerContainerId));
								}
						}
					}, props.timer);
				}
			}
	}, 1);
	}, [props.timer, date, props.animate]);

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

	function bannerIcons() {
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

	function removeBanner() {
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
				document.body.removeChild(document.getElementById(bannerContainerId));
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
						document.body.removeChild(document.getElementById(bannerContainerId));
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
					document.body.removeChild(document.getElementById(bannerContainerId));
				}, 350);
			} else {
				if(document.getElementById(`${date}`)) {
					document.getElementById(bannerContainerId).removeChild(removeElement);
					document.body.removeChild(document.getElementById(bannerContainerId));
				}
		}
	}

	function bannerChild() {
		return (
			<div
			id={`${date}`}
			style={{
				position: "fixed",
				width: "calc(100% - 30px)",
				minHeight: "30px",
				backgroundColor: variantColor(),
				bottom: bannerTop(),
				zIndex: 9999,
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
				padding: "5px 15px 5px 15px",
				fontSize: "15px",
				fontWeight: 600,
				fontFamily: " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
				color: "#FFFFFF",
				WebkitUserSelect: "none"
			}}
		>

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
					<i className={bannerIcons()} aria-hidden="true"></i>
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
					onClick={() => {
						removeBanner();
					}}
				></i>
			</div>
		</div>
		)
	}

	return (
		<></>
	)
}

export default Banner;