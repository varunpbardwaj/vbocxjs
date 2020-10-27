Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Banner(props) {
    var date = "banner-" + new Date().getTime();
    React.useEffect(function () {
        var linkTag = document.createElement("link");
        linkTag.href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
        linkTag.rel = "stylesheet";
        document.head.appendChild(linkTag);
        if (props.animate && props.animate === "stretch-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1, 1, 1)' },
                { transform: 'scale3d(1.2, 0.7, 1)' },
                { transform: 'scale3d(0.7, 1.2, 1)' },
                { transform: 'scale3d(1.1, 0.8, 1)' },
                { transform: 'scale3d(0.9, 1, 1)' },
                { transform: 'scale3d(1, 0.9, 1)' },
                { transform: 'scale3d(1, 1, 1)' },
            ], {
                duration: 800,
                iterations: 1
            });
        }
        else if (props.animate && props.animate === "fade-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration: 200,
                iterations: 1
            });
        }
        else if (props.animate && props.animate === "zoom-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1.3, 1.3, 1.3)', opacity: 0 },
                { transform: 'scale3d(1, 1, 1)', opacity: 1 }
            ], {
                duration: 400,
                iterations: 1
            });
        }
        if (document.getElementById("" + date)) {
            if (props.timer) {
                setTimeout(function () {
                    var removeElement = document.getElementById("" + date);
                    if (props.animate && props.animate === "stretch-in-out" && document.getElementById("" + date)) {
                        document.getElementById("" + date).animate([
                            { transform: 'scale3d(1, 1, 1)' },
                            { transform: 'scale3d(1.25, 0.75, 1)' },
                            { transform: 'scale3d(0.75, 1.25, 1)' },
                            { transform: 'scale3d(1.15, 0.85, 1)' },
                            { transform: 'scale3d(.95, 1.05, 1)' },
                            { transform: 'scale3d(1.05, .95, 1)' },
                            { transform: 'scale3d(1, 1, 1)' },
                        ], {
                            duration: 800,
                            iterations: 1
                        });
                        setTimeout(function () {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }, 1000);
                    }
                    else if (props.animate && props.animate === "fade-in-out" && document.getElementById("" + date)) {
                        document.getElementById("" + date).animate([
                            { opacity: 1 },
                            { opacity: 0 }
                        ], {
                            duration: 200,
                            iterations: 1
                        });
                        setTimeout(function () {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }, 150);
                    }
                    else if (props.animate && props.animate === "zoom-in-out" && document.getElementById("" + date)) {
                        document.getElementById("" + date).animate([
                            { transform: 'scale3d(1, 1, 1)', opacity: 1 },
                            { transform: 'scale3d(1.2, 1.2, 1.2)', opacity: 0 }
                        ], {
                            duration: 400,
                            iterations: 1
                        });
                        setTimeout(function () {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }, 350);
                    }
                    else {
                        if (document.getElementById("" + date)) {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }
                    }
                }, props.timer);
            }
        }
    }, [props.timer, date, props.animate]);
    function bannerTop() {
        if (props.position) {
            if (props.position === "top") {
                return "";
            }
            else if (props.position === "middle") {
                return "50%";
            }
            else if (props.position === "bottom") {
                return "0%";
            }
            else {
                return props.position;
            }
        }
        else {
            return "";
        }
    }
    function variantColor() {
        if (props.variant === "success") {
            return "#72b55e";
        }
        else if (props.variant === "error") {
            return "#f54444";
        }
        else if (props.variant === "warning") {
            return "#e5b30d";
        }
        else if (props.variant === "info") {
            return "#537dbc";
        }
        else {
            return "#74797e";
        }
    }
    function bannerIcons() {
        if (props.variant === "success") {
            return "fa fa-check-circle";
        }
        else if (props.variant === "error") {
            return "fa fa-exclamation-triangle";
        }
        else if (props.variant === "warning") {
            return "fa fa-exclamation-circle";
        }
        else if (props.variant === "info") {
            return "fa fa-info-circle";
        }
        else {
            return "";
        }
    }
    function removeBanner() {
        var removeElement = document.getElementById("" + date);
        if (props.animate && props.animate === "stretch-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1, 1, 1)' },
                { transform: 'scale3d(1.2, 0.7, 1)' },
                { transform: 'scale3d(0.7, 1.2, 1)' },
                { transform: 'scale3d(1.1, 0.8, 1)' },
                { transform: 'scale3d(0.9, 1, 1)' },
                { transform: 'scale3d(1, 0.9, 1)' },
                { transform: 'scale3d(1, 1, 1)' },
            ], {
                duration: 800,
                iterations: 1
            });
            setTimeout(function () {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }, 1000);
        }
        else if (props.animate && props.animate === "fade-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 200,
                iterations: 1
            });
            setTimeout(function () {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }, 150);
        }
        else if (props.animate && props.animate === "zoom-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1, 1, 1)', opacity: 1 },
                { transform: 'scale3d(1.2, 1.2, 1.2)', opacity: 0 }
            ], {
                duration: 400,
                iterations: 1
            });
            setTimeout(function () {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }, 350);
        }
        else {
            if (document.getElementById("" + date)) {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }
        }
    }
    return (React__default['default'].createElement("div", { id: "" + date, style: {
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
        } },
        React__default['default'].createElement("div", { style: {
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            } },
            React__default['default'].createElement("div", { style: {
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                } },
                React__default['default'].createElement("i", { className: bannerIcons(), "aria-hidden": "true" }),
                React__default['default'].createElement("div", { style: { marginLeft: "10px", marginRight: "10px", textAlign: "justify", textJustify: "inter-word", padding: "5px" } }, props.message)),
            React__default['default'].createElement("i", { className: "fa fa-times", "aria-hidden": "true", style: {
                    cursor: "pointer"
                }, onClick: function () {
                    removeBanner();
                } }))));
}

function CustomBanner(props) {
    var date = "error-" + new Date().getTime();
    React.useEffect(function () {
        var linkTag = document.createElement("link");
        linkTag.href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
        linkTag.rel = "stylesheet";
        document.head.appendChild(linkTag);
        if (props.animate && props.animate === "stretch-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1, 1, 1)' },
                { transform: 'scale3d(1.2, 0.7, 1)' },
                { transform: 'scale3d(0.7, 1.2, 1)' },
                { transform: 'scale3d(1.1, 0.8, 1)' },
                { transform: 'scale3d(0.9, 1, 1)' },
                { transform: 'scale3d(1, 0.9, 1)' },
                { transform: 'scale3d(1, 1, 1)' },
            ], {
                duration: 800,
                iterations: 1
            });
        }
        else if (props.animate && props.animate === "fade-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration: 200,
                iterations: 1
            });
        }
        else if (props.animate && props.animate === "zoom-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1.3, 1.3, 1.3)', opacity: 0 },
                { transform: 'scale3d(1, 1, 1)', opacity: 1 }
            ], {
                duration: 400,
                iterations: 1
            });
        }
        if (document.getElementById("" + date)) {
            if (props.timer) {
                setTimeout(function () {
                    var removeElement = document.getElementById("" + date);
                    if (props.animate && props.animate === "stretch-in-out" && document.getElementById("" + date)) {
                        document.getElementById("" + date).animate([
                            { transform: 'scale3d(1, 1, 1)' },
                            { transform: 'scale3d(1.25, 0.75, 1)' },
                            { transform: 'scale3d(0.75, 1.25, 1)' },
                            { transform: 'scale3d(1.15, 0.85, 1)' },
                            { transform: 'scale3d(.95, 1.05, 1)' },
                            { transform: 'scale3d(1.05, .95, 1)' },
                            { transform: 'scale3d(1, 1, 1)' },
                        ], {
                            duration: 800,
                            iterations: 1
                        });
                        setTimeout(function () {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }, 1000);
                    }
                    else if (props.animate && props.animate === "fade-in-out" && document.getElementById("" + date)) {
                        document.getElementById("" + date).animate([
                            { opacity: 1 },
                            { opacity: 0 }
                        ], {
                            duration: 200,
                            iterations: 1
                        });
                        setTimeout(function () {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }, 150);
                    }
                    else if (props.animate && props.animate === "zoom-in-out" && document.getElementById("" + date)) {
                        document.getElementById("" + date).animate([
                            { transform: 'scale3d(1, 1, 1)', opacity: 1 },
                            { transform: 'scale3d(1.2, 1.2, 1.2)', opacity: 0 }
                        ], {
                            duration: 400,
                            iterations: 1
                        });
                        setTimeout(function () {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }, 350);
                    }
                    else {
                        if (document.getElementById("" + date)) {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }
                    }
                }, props.timer);
            }
        }
    }, [props.timer, date, props.animate]);
    function bannerTop() {
        if (props.position) {
            if (props.position === "top") {
                return "";
            }
            else if (props.position === "middle") {
                return "50%";
            }
            else if (props.position === "bottom") {
                return "0%";
            }
            else {
                return props.position;
            }
        }
        else {
            return "";
        }
    }
    function removeCustomBanner() {
        var removeElement = document.getElementById("" + date);
        if (props.animate && props.animate === "stretch-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1, 1, 1)' },
                { transform: 'scale3d(1.2, 0.7, 1)' },
                { transform: 'scale3d(0.7, 1.2, 1)' },
                { transform: 'scale3d(1.1, 0.8, 1)' },
                { transform: 'scale3d(0.9, 1, 1)' },
                { transform: 'scale3d(1, 0.9, 1)' },
                { transform: 'scale3d(1, 1, 1)' },
            ], {
                duration: 800,
                iterations: 1
            });
            setTimeout(function () {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }, 1000);
        }
        else if (props.animate && props.animate === "fade-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 200,
                iterations: 1
            });
            setTimeout(function () {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }, 150);
        }
        else if (props.animate && props.animate === "zoom-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1, 1, 1)', opacity: 1 },
                { transform: 'scale3d(1.2, 1.2, 1.2)', opacity: 0 }
            ], {
                duration: 400,
                iterations: 1
            });
            setTimeout(function () {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }, 350);
        }
        else {
            if (document.getElementById("" + date)) {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }
        }
    }
    return (React__default['default'].createElement("div", { id: "" + date, style: {
            position: "fixed",
            width: "calc(100% - 30px)",
            minHeight: "30px",
            backgroundColor: props.backgroundColor,
            bottom: bannerTop(),
            zIndex: 9999,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "5px 15px 5px 15px",
            fontSize: "15px",
            fontWeight: 600,
            fontFamily: " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
            color: props.color,
            WebkitUserSelect: "none"
        } },
        React__default['default'].createElement("div", { style: {
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            } },
            React__default['default'].createElement("div", { style: {
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                } },
                props.bannerIcon ? props.bannerIcon : null,
                React__default['default'].createElement("div", { style: { marginLeft: "10px", marginRight: "10px", textAlign: "justify", textJustify: "inter-word", padding: "5px" } }, props.message)),
            props.closeIcon ?
                React__default['default'].createElement("div", { style: {
                        cursor: "pointer"
                    }, onClick: function () {
                        removeCustomBanner();
                    } }, props.closeIcon) :
                React__default['default'].createElement("i", { className: "fa fa-times", "aria-hidden": "true", style: {
                        cursor: "pointer"
                    } }))));
}

function Badge(props) {
    var date = props.variant + "-" + new Date().getTime();
    function variantColor() {
        if (props.variant === "success") {
            return "#72b55e";
        }
        else if (props.variant === "error") {
            return "#f54444";
        }
        else if (props.variant === "warning") {
            return "#e5b30d";
        }
        else if (props.variant === "info") {
            return "#537dbc";
        }
        else {
            return "#74797e";
        }
    }
    return (React__default['default'].createElement(React__default['default'].Fragment, null, props.type === "outline" ?
        React__default['default'].createElement("div", { id: date, style: {
                display: "inline-block",
                WebkitUserSelect: "none",
                backgroundColor: "#FFFFFF00",
                color: variantColor(),
                border: "1px solid " + variantColor(),
                padding: "0px 3px 1px 3px",
                fontFamily: " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
                fontWeight: 500,
                fontSize: "0.72rem",
                borderRadius: "2px"
            } }, props.message.toUpperCase()) :
        React__default['default'].createElement("div", { id: date, style: {
                display: "inline-block",
                WebkitUserSelect: "none",
                backgroundColor: variantColor(),
                color: "#FFFFFF",
                padding: "0px 3px 1px 3px",
                fontFamily: " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
                fontWeight: 500,
                fontSize: "0.72rem",
                borderRadius: "2px"
            } }, props.message.toUpperCase())));
}

function Toast(props) {
    var date = "error-" + new Date().getTime();
    React.useEffect(function () {
        var linkTag = document.createElement("link");
        linkTag.href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
        linkTag.rel = "stylesheet";
        document.head.appendChild(linkTag);
        if (props.animate && props.animate === "stretch-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1, 1, 1)' },
                { transform: 'scale3d(1.2, 0.7, 1)' },
                { transform: 'scale3d(0.7, 1.2, 1)' },
                { transform: 'scale3d(1.1, 0.8, 1)' },
                { transform: 'scale3d(0.9, 1, 1)' },
                { transform: 'scale3d(1, 0.9, 1)' },
                { transform: 'scale3d(1, 1, 1)' },
            ], {
                duration: 800,
                iterations: 1
            });
        }
        else if (props.animate && props.animate === "fade-in-out") {
            document.getElementById("" + date).animate([
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration: 200,
                iterations: 1
            });
        }
        else if (props.animate && props.animate === "zoom-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1.3, 1.3, 1.3)', opacity: 0 },
                { transform: 'scale3d(1, 1, 1)', opacity: 1 }
            ], {
                duration: 400,
                iterations: 1
            });
        }
        if (document.getElementById("" + date)) {
            if (props.timer) {
                setTimeout(function () {
                    var removeElement = document.getElementById("" + date);
                    if (props.animate && props.animate === "stretch-in-out" && document.getElementById("" + date)) {
                        document.getElementById("" + date).animate([
                            { transform: 'scale3d(1, 1, 1)' },
                            { transform: 'scale3d(1.25, 0.75, 1)' },
                            { transform: 'scale3d(0.75, 1.25, 1)' },
                            { transform: 'scale3d(1.15, 0.85, 1)' },
                            { transform: 'scale3d(0.95, 1.05, 1)' },
                            { transform: 'scale3d(1.05, .95, 1)' },
                            { transform: 'scale3d(1, 1, 1)' },
                        ], {
                            duration: 800,
                            iterations: 1
                        });
                        setTimeout(function () {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }, 1000);
                    }
                    else if (props.animate && props.animate === "fade-in-out" && document.getElementById("" + date)) {
                        document.getElementById("" + date).animate([
                            { opacity: 1 },
                            { opacity: 0 }
                        ], {
                            duration: 200,
                            iterations: 1
                        });
                        setTimeout(function () {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }, 150);
                    }
                    else if (props.animate && props.animate === "zoom-in-out" && document.getElementById("" + date)) {
                        document.getElementById("" + date).animate([
                            { transform: 'scale3d(1, 1, 1)', opacity: 1 },
                            { transform: 'scale3d(1.2, 1.2, 1.2)', opacity: 0 }
                        ], {
                            duration: 400,
                            iterations: 1
                        });
                        setTimeout(function () {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }, 350);
                    }
                    else {
                        if (document.getElementById("" + date)) {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }
                    }
                }, props.timer);
            }
        }
    }, [props.timer, date]);
    function bannerTop() {
        if (props.position) {
            if (props.position === "top") {
                return "";
            }
            else if (props.position === "middle") {
                return "50%";
            }
            else if (props.position === "bottom") {
                return "0%";
            }
            else {
                return props.position;
            }
        }
        else {
            return "";
        }
    }
    function variantColor() {
        if (props.variant === "success") {
            return "#72b55e";
        }
        else if (props.variant === "error") {
            return "#f54444";
        }
        else if (props.variant === "warning") {
            return "#e5b30d";
        }
        else if (props.variant === "info") {
            return "#537dbc";
        }
        else {
            return "#74797e";
        }
    }
    function removeToast() {
        var removeElement = document.getElementById("" + date);
        if (props.animate && props.animate === "stretch-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1, 1, 1)' },
                { transform: 'scale3d(1.2, 0.7, 1)' },
                { transform: 'scale3d(0.7, 1.2, 1)' },
                { transform: 'scale3d(1.1, 0.8, 1)' },
                { transform: 'scale3d(0.9, 1, 1)' },
                { transform: 'scale3d(1, 0.9, 1)' },
                { transform: 'scale3d(1, 1, 1)' },
            ], {
                duration: 800,
                iterations: 1
            });
            setTimeout(function () {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }, 1000);
        }
        else if (props.animate && props.animate === "fade-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 200,
                iterations: 1
            });
            setTimeout(function () {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }, 150);
        }
        else if (props.animate && props.animate === "zoom-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1, 1, 1)', opacity: 1 },
                { transform: 'scale3d(1.2, 1.2, 1.2)', opacity: 0 }
            ], {
                duration: 400,
                iterations: 1
            });
            setTimeout(function () {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }, 350);
        }
        else {
            if (document.getElementById("" + date)) {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }
        }
    }
    function toastIcons() {
        if (props.variant === "success") {
            return "fa fa-check-circle";
        }
        else if (props.variant === "error") {
            return "fa fa-exclamation-triangle";
        }
        else if (props.variant === "warning") {
            return "fa fa-exclamation-circle";
        }
        else if (props.variant === "info") {
            return "fa fa-info-circle";
        }
        else {
            return "";
        }
    }
    return (React__default['default'].createElement("div", { id: "" + date, style: {
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
        } },
        React__default['default'].createElement("div", { style: {
                maxWidth: "50%",
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
            } },
            React__default['default'].createElement("div", { style: {
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                } },
                React__default['default'].createElement("div", { style: {
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    } },
                    React__default['default'].createElement("i", { className: toastIcons(), "aria-hidden": "true" }),
                    React__default['default'].createElement("div", { style: { marginLeft: "10px", marginRight: "10px", textAlign: "justify", textJustify: "inter-word", padding: "5px" } }, props.message)),
                React__default['default'].createElement("i", { className: "fa fa-times", "aria-hidden": "true", style: {
                        cursor: "pointer"
                    }, onClick: function () {
                        removeToast();
                    } })))));
}

function CustomToast(props) {
    var date = "error-" + new Date().getTime();
    React.useEffect(function () {
        var linkTag = document.createElement("link");
        linkTag.href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
        linkTag.rel = "stylesheet";
        document.head.appendChild(linkTag);
        if (props.animate && props.animate === "stretch-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1, 1, 1)' },
                { transform: 'scale3d(1.2, 0.7, 1)' },
                { transform: 'scale3d(0.7, 1.2, 1)' },
                { transform: 'scale3d(1.1, 0.8, 1)' },
                { transform: 'scale3d(0.9, 1, 1)' },
                { transform: 'scale3d(1, 0.9, 1)' },
                { transform: 'scale3d(1, 1, 1)' },
            ], {
                duration: 800,
                iterations: 1
            });
        }
        else if (props.animate && props.animate === "fade-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration: 200,
                iterations: 1
            });
        }
        else if (props.animate && props.animate === "zoom-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1.3, 1.3, 1.3)', opacity: 0 },
                { transform: 'scale3d(1, 1, 1)', opacity: 1 }
            ], {
                duration: 400,
                iterations: 1
            });
        }
        if (document.getElementById("" + date)) {
            if (props.timer) {
                setTimeout(function () {
                    var removeElement = document.getElementById("" + date);
                    if (props.animate && props.animate === "stretch-in-out" && document.getElementById("" + date)) {
                        document.getElementById("" + date).animate([
                            { transform: 'scale3d(1, 1, 1)' },
                            { transform: 'scale3d(1.25, 0.75, 1)' },
                            { transform: 'scale3d(0.75, 1.25, 1)' },
                            { transform: 'scale3d(1.15, 0.85, 1)' },
                            { transform: 'scale3d(0.95, 1.05, 1)' },
                            { transform: 'scale3d(1.05, .95, 1)' },
                            { transform: 'scale3d(1, 1, 1)' },
                        ], {
                            duration: 800,
                            iterations: 1
                        });
                        setTimeout(function () {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }, 1000);
                    }
                    else if (props.animate && props.animate === "fade-in-out" && document.getElementById("" + date)) {
                        document.getElementById("" + date).animate([
                            { opacity: 1 },
                            { opacity: 0 }
                        ], {
                            duration: 200,
                            iterations: 1
                        });
                        setTimeout(function () {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }, 150);
                    }
                    else if (props.animate && props.animate === "zoom-in-out" && document.getElementById("" + date)) {
                        document.getElementById("" + date).animate([
                            { transform: 'scale3d(1, 1, 1)', opacity: 1 },
                            { transform: 'scale3d(1.2, 1.2, 1.2)', opacity: 0 }
                        ], {
                            duration: 400,
                            iterations: 1
                        });
                        setTimeout(function () {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }, 350);
                    }
                    else {
                        if (document.getElementById("" + date)) {
                            document.getElementsByClassName("App")[0].removeChild(removeElement);
                        }
                    }
                }, props.timer);
            }
        }
    }, [props.timer, date]);
    function bannerTop() {
        if (props.position) {
            if (props.position === "top") {
                return "";
            }
            else if (props.position === "middle") {
                return "50%";
            }
            else if (props.position === "bottom") {
                return "0%";
            }
            else {
                return props.position;
            }
        }
        else {
            return "";
        }
    }
    function removeCustomToast() {
        var removeElement = document.getElementById("" + date);
        if (props.animate && props.animate === "stretch-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1, 1, 1)' },
                { transform: 'scale3d(1.2, 0.7, 1)' },
                { transform: 'scale3d(0.7, 1.2, 1)' },
                { transform: 'scale3d(1.1, 0.8, 1)' },
                { transform: 'scale3d(0.9, 1, 1)' },
                { transform: 'scale3d(1, 0.9, 1)' },
                { transform: 'scale3d(1, 1, 1)' },
            ], {
                duration: 800,
                iterations: 1
            });
            setTimeout(function () {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }, 1000);
        }
        else if (props.animate && props.animate === "fade-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 200,
                iterations: 1
            });
            setTimeout(function () {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }, 150);
        }
        else if (props.animate && props.animate === "zoom-in-out" && document.getElementById("" + date)) {
            document.getElementById("" + date).animate([
                { transform: 'scale3d(1, 1, 1)', opacity: 1 },
                { transform: 'scale3d(1.2, 1.2, 1.2)', opacity: 0 }
            ], {
                duration: 400,
                iterations: 1
            });
            setTimeout(function () {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }, 350);
        }
        else {
            alert();
            if (document.getElementById("" + date)) {
                document.getElementsByClassName("App")[0].removeChild(removeElement);
            }
        }
    }
    return (React__default['default'].createElement("div", { id: "" + date, style: {
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
        } },
        React__default['default'].createElement("div", { style: {
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
            } },
            React__default['default'].createElement("div", { style: {
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                } },
                React__default['default'].createElement("div", { style: {
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    } },
                    props.toastIcon ? props.toastIcon : null,
                    React__default['default'].createElement("div", { style: { marginLeft: "10px", marginRight: "10px", textAlign: "justify", textJustify: "inter-word", padding: "5px" } }, props.message)),
                props.closeIcon ?
                    React__default['default'].createElement("div", { style: {
                            cursor: "pointer"
                        }, onClick: function () {
                            removeCustomToast();
                        } }, props.closeIcon) :
                    React__default['default'].createElement("i", { className: "fa fa-times", "aria-hidden": "true", style: {
                            cursor: "pointer"
                        } })))));
}

exports.Badge = Badge;
exports.Banner = Banner;
exports.CustomBanner = CustomBanner;
exports.CustomToast = CustomToast;
exports.Toast = Toast;
//# sourceMappingURL=index.js.map
