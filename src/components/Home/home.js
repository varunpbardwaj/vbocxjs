import React, { useEffect } from 'react';
import "../../styles/home.css";
import Varun from "../../assets/images/varun.JPEG";
import $ from 'jquery';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Banner from "../Banner";
import CustomBanner from "../Custom-Banner";
import Toast from "../Toast";
import CustomToast from "../Custom-Toast";
import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

    // const data = [
    //     { id: 1, name: 'variant', type: 'default, info, success, warning,', decsription: "" }
    // ];

    useEffect(() => {
		const linkTag = document.createElement("link");
		linkTag.href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
		linkTag.rel = "stylesheet";
        document.head.appendChild(linkTag);
    }, []);

    function scrollToClone(id, tops) {
        $('html, body').animate({
            scrollTop: $(id).offset().top - tops
        }, 800);
    }

    return (
        <>
            <div className="home-container">
                <div className="header-for-create">
                    Create banners and toasts with <span className="speed">speed.</span>
                </div>
                <div className="desc">
                    vbocxjs is a ReactJS library for creating banners and toasts with zero dependencies. It uses inline styling by reducing the amount of look up time for the CSS engine.
                </div>
                <div className="get-git-holder">
                    <div className="get-started-button" onClick={() => {scrollToClone("#documentation", 100)}}>Get Started</div>
                    <div className="github-button"><i className="git fa fa-github"></i> Github</div>
                </div>
                <div className="d-n-c-img-holder">
                    <div className="d-n-c-by">DESIGNED AND CODED BY </div>
                    <img src={Varun} alt="" width="35px;" className="varun-img" />
                    <div className="d-n-c-varun">Varun Bardwaj</div>
                </div>
            </div>
            <div id="documentation" className="documentation">
                    <h1>Getting Started</h1>
                    <p style={{marginTop: "30px", fontWeight: "300", fontSize: "19px"}}>Install vbocxjs</p>
                    <SyntaxHighlighter showLineNumbers={false} showInlineLineNumbers={false}  language="javascript" style={atomOneDark} className="highlighter">
                    {`npm install vbocxjs\n                 or\n    yarn add vbocxjs`}
                    </SyntaxHighlighter>

                    <div className="sectionHolder">
                        <div className="scrollButton" onClick={() => {scrollToClone("#Banner", 150)}}>Banners</div>
                        <div className="scrollButton" onClick={() => {scrollToClone("#Custom-Banner", 100)}}>Custom Banner</div>
                        <div className="scrollButton" onClick={() => {scrollToClone("#Toast", 150)}}>Toasts</div>
                        <div className="scrollButton" onClick={() => {scrollToClone("#Custom-Toast", 100)}}>Custom Toast</div>
                    </div>


                    <h3 style={{marginTop: "100px", fontWeight: "600", fontSize: "1.9rem"}}>Banners</h3>

                    <div className="banner-img-all" id="Banner">
                        <div style={{marginBottom: "50px", padding: "20px 20px 0px 20px", border: "1px solid #eeeeee", borderRadius: "10px"}}>
                            <Banner
                                variant="default"
                                message="This is a Default Banner."
                            />
                        <div>
                            <SyntaxHighlighter showLineNumbers={false} showInlineLineNumbers={false}  language="javascript" style={atomOneDark} className="highlighter">
                                {`import { Banner } from "vbocxjs";\n\n    <Banner\n\tvariant="default"\n\tmessage="This is a Default Banner."\n    />`}
                            </SyntaxHighlighter>
                        </div>
                        </div>
                    </div>

                    <div className="banner-img-all">
                            <div style={{marginBottom: "50px", padding: "20px 20px 0px 20px", border: "1px solid #eeeeee", borderRadius: "10px"}}>
                                <Banner
                                    variant="info"
                                    message="This is a Info Banner."
                                />
                                <div>
                                    <SyntaxHighlighter showLineNumbers={false} showInlineLineNumbers={false}  language="javascript" style={atomOneDark} className="highlighter">
                                        {`import { Banner } from "vbocxjs";\n\n    <Banner\n\tvariant="info"\n\tmessage="This is a Info Banner."\n    />`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                    </div>

                    <div className="banner-img-all">
                            <div style={{marginBottom: "50px", padding: "20px 20px 0px 20px", border: "1px solid #eeeeee", borderRadius: "10px"}}>
                                <Banner
                                    variant="success"
                                    message="This is a Success Banner."
                                />
                                <div>
                                    <SyntaxHighlighter showLineNumbers={false} showInlineLineNumbers={false}  language="javascript" style={atomOneDark} className="highlighter">
                                        {`import { Banner } from "vbocxjs";\n\n    <Banner\n\tvariant="success"\n\tmessage="This is a Success Banner."\n    />`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                    </div>

                    <div className="banner-img-all">
                            <div style={{marginBottom: "50px", padding: "20px 20px 0px 20px", border: "1px solid #eeeeee", borderRadius: "10px"}}>
                                <Banner
                                    variant="warning"
                                    message="This is a Warning Banner."
                                />
                                <div>
                                    <SyntaxHighlighter showLineNumbers={false} showInlineLineNumbers={false}  language="javascript" style={atomOneDark} className="highlighter">
                                        {`import { Banner } from "vbocxjs";\n\n    <Banner\n\tvariant="warning"\n\tmessage="This is a Warning Banner."\n    />`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                    </div>

                    <div className="banner-img-all">
                            <div style={{marginBottom: "50px", padding: "20px 20px 0px 20px", border: "1px solid #eeeeee", borderRadius: "10px"}}>
                                <Banner
                                    variant="error"
                                    message="This is a Error Banner."
                                />
                                <div>
                                    <SyntaxHighlighter showLineNumbers={false} showInlineLineNumbers={false}  language="javascript" style={atomOneDark} className="highlighter">
                                        {`import { Banner } from "vbocxjs";\n\n    <Banner\n\tvariant="error"\n\tmessage="This is a Error Banner."\n    />`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                    </div>


                    <div className="banner-img-all" id="Custom-Banner">
                            <div style={{marginBottom: "50px", padding: "20px 20px 0px 20px", border: "1px solid #eeeeee", borderRadius: "10px"}}>
                                <CustomBanner
                                    message="This is a Custom Banner."
                                    backgroundColor="#d527ad"
                                    color="#FFFFFF"
                                    bannerIcon={<i className="fa fa-heart" aria-hidden="true"></i>}
                                    closeIcon={<i className="fa fa-times" aria-hidden="true"></i>}
                                />
                                <div>
                                    <SyntaxHighlighter showLineNumbers={false} showInlineLineNumbers={false}  language="javascript" style={atomOneDark} className="highlighter">
                                        {`import { CustomBanner } from "vbocxjs";\n\n    <CustomBanner\n\tmessage="This is a Custom Banner."\n\tbackgroundColor="#d527ad"\n\tcolor="#FFFFFF"\n\tbannerIcon={<i className="fa fa-heart" aria-hidden="true"></i>}\n\tcloseIcon={<i className="fa fa-times" aria-hidden="true"></i>}\n    />`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                    </div>

                    <label style={{marginTop: "30px", marginBottom: "25px", fontWeight: "600", fontSize: "1.5rem"}}>Props</label><br />

                    <label style={{marginTop: "10px", marginBottom: "25px", fontWeight: "600", fontSize: "1.2rem"}}>Banner Props</label>

                    <div>
                        <Table size="sm" style={{color: 'rgba(0, 0, 0, 0.7)'}}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Mandatory</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>variant</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>default</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>info</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>success</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>warning</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>error</label></td>
                                <td>yes</td>
                                <td>The variant of the alert style to use.</td>
                            </tr>
                            <tr>
                                <td>position</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>top</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>middle</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>bottom</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>XX%</label></td>
                                <td>no</td>
                                <td>Popup out position of the banner.</td>
                            </tr>
                            <tr>
                                <td>message</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>string</label></td>
                                <td>yes</td>
                                <td>Message to be displayed.</td>
                            </tr>
                            <tr>
                                <td>timer</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>number</label></td>
                                <td>no</td>
                                <td>Display time of banner in milliseconds.</td>
                            </tr>
                            <tr>
                                <td>animate</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>fade-in-out</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>zoom-in-out</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>stretch-in-out</label></td>
                                <td>no</td>
                                <td>Popup out animation of the banner.</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>

                    <label style={{marginTop: "30px", marginBottom: "25px", fontWeight: "600", fontSize: "1.2rem"}}>Custom Banner Props</label>

                    <div>
                        <Table size="sm" style={{color: 'rgba(0, 0, 0, 0.7)'}}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Mandatory</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>position</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>top</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>middle</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>bottom</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>XX%</label></td>
                                <td>no</td>
                                <td>Popup out position of the banner.</td>
                            </tr>
                            <tr>
                                <td>message</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>string</label></td>
                                <td>yes</td>
                                <td>Message to be displayed.</td>
                            </tr>
                            <tr>
                                <td>backgroundColor</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>string</label></td>
                                <td>yes</td>
                                <td>Background Color of banner.</td>
                            </tr>
                            <tr>
                                <td>color</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>string</label></td>
                                <td>yes</td>
                                <td>Text Color of banner.</td>
                            </tr>
                            <tr>
                                <td>bannerIcon</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>JSX.Element</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>Font Awesome Icons</label></td>
                                <td>no</td>
                                <td>Icon indicating banner type.</td>
                            </tr>
                            <tr>
                                <td>closeIcon</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>JSX.Element</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>Font Awesome Icons</label></td>
                                <td>no</td>
                                <td>Icon replacing default close icon.</td>
                            </tr>
                            <tr>
                                <td>timer</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>number</label></td>
                                <td>no</td>
                                <td>Display time of banner in milliseconds.</td>
                            </tr>
                            <tr>
                                <td>animate</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>fade-in-out</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>zoom-in-out</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>stretch-in-out</label></td>
                                <td>no</td>
                                <td>Popup out animation of the banner.</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>





                    <h3 style={{marginTop: "100px", fontWeight: "600", fontSize: "1.9rem"}}>Toasts</h3>

                    <div className="banner-img-all" id="Toast">
                        <div style={{marginBottom: "50px", padding: "20px 20px 0px 20px", border: "1px solid #eeeeee", borderRadius: "10px"}}>
                            <Toast
                                variant="default"
                                message="This is a Default Toast."
                            />
                        <div>
                            <SyntaxHighlighter showLineNumbers={false} showInlineLineNumbers={false}  language="javascript" style={atomOneDark} className="highlighter">
                                {`import { Toast } from "vbocxjs";\n\n    <Toast\n\tvariant="default"\n\tmessage="This is a Default Toast."\n    />`}
                            </SyntaxHighlighter>
                        </div>
                        </div>
                    </div>

                    <div className="banner-img-all">
                        <div style={{marginBottom: "50px", padding: "20px 20px 0px 20px", border: "1px solid #eeeeee", borderRadius: "10px"}}>
                            <Toast
                                variant="info"
                                message="This is a Info Toast."
                            />
                        <div>
                            <SyntaxHighlighter showLineNumbers={false} showInlineLineNumbers={false}  language="javascript" style={atomOneDark} className="highlighter">
                                {`import { Toast } from "vbocxjs";\n\n    <Toast\n\tvariant="info"\n\tmessage="This is a Info Toast."\n    />`}
                            </SyntaxHighlighter>
                        </div>
                        </div>
                    </div>

                    <div className="banner-img-all">
                        <div style={{marginBottom: "50px", padding: "20px 20px 0px 20px", border: "1px solid #eeeeee", borderRadius: "10px"}}>
                            <Toast
                                variant="success"
                                message="This is a Success Toast."
                            />
                        <div>
                            <SyntaxHighlighter showLineNumbers={false} showInlineLineNumbers={false}  language="javascript" style={atomOneDark} className="highlighter">
                                {`import { Toast } from "vbocxjs";\n\n    <Toast\n\tvariant="success"\n\tmessage="This is a Success Toast."\n    />`}
                            </SyntaxHighlighter>
                        </div>
                        </div>
                    </div>

                    <div className="banner-img-all">
                        <div style={{marginBottom: "50px", padding: "20px 20px 0px 20px", border: "1px solid #eeeeee", borderRadius: "10px"}}>
                            <Toast
                                variant="warning"
                                message="This is a Warning Toast."
                            />
                        <div>
                            <SyntaxHighlighter showLineNumbers={false} showInlineLineNumbers={false}  language="javascript" style={atomOneDark} className="highlighter">
                                {`import { Toast } from "vbocxjs";\n\n    <Toast\n\tvariant="warning"\n\tmessage="This is a Warning Toast."\n    />`}
                            </SyntaxHighlighter>
                        </div>
                        </div>
                    </div>

                    <div className="banner-img-all">
                        <div style={{marginBottom: "50px", padding: "20px 20px 0px 20px", border: "1px solid #eeeeee", borderRadius: "10px"}}>
                            <Toast
                                variant="error"
                                message="This is a Error Toast."
                            />
                        <div>
                            <SyntaxHighlighter showLineNumbers={false} showInlineLineNumbers={false}  language="javascript" style={atomOneDark} className="highlighter">
                                {`import { Toast } from "vbocxjs";\n\n    <Toast\n\tvariant="error"\n\tmessage="This is a Error Toast."\n    />`}
                            </SyntaxHighlighter>
                        </div>
                        </div>
                    </div>

                    <div className="banner-img-all" id="Custom-Toast">
                        <div style={{marginBottom: "50px", padding: "20px 20px 0px 20px", border: "1px solid #eeeeee", borderRadius: "10px"}}>
                            <CustomToast
                                message="This is a Custom Toast."
                                backgroundColor="#D527AD"
                                color="#ffffff"
                                toastIcon={<i className="fa fa-heart" aria-hidden="true"></i>}
                                closeIcon={<i className="fa fa-times" aria-hidden="true"></i>}
                            />
                        <div>
                            <SyntaxHighlighter showLineNumbers={false} showInlineLineNumbers={false}  language="javascript" style={atomOneDark} className="highlighter">
                            {`import { CustomToast } from "vbocxjs";\n\n    <CustomToast\n\tmessage="This is a Custom Toast."\n\tbackgroundColor="#d527ad"\n\tcolor="#FFFFFF"\n\ttoastIcon={<i className="fa fa-heart" aria-hidden="true"></i>}\n\tcloseIcon={<i className="fa fa-times" aria-hidden="true"></i>}\n    />`}
                            </SyntaxHighlighter>
                        </div>
                        </div>
                    </div>

                    <label style={{marginTop: "30px", marginBottom: "25px", fontWeight: "600", fontSize: "1.5rem"}}>Props</label><br />

                    <label style={{marginTop: "10px", marginBottom: "25px", fontWeight: "600", fontSize: "1.2rem"}}>Toast Props</label>

                    <div>
                        <Table size="sm" style={{color: 'rgba(0, 0, 0, 0.7)'}}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Mandatory</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>variant</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>default</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>info</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>success</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>warning</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>error</label></td>
                                <td>yes</td>
                                <td>The variant of the alert style to use.</td>
                            </tr>
                            <tr>
                                <td>position</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>top</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>middle</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>bottom</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>XX%</label></td>
                                <td>no</td>
                                <td>Popup out position of the toast.</td>
                            </tr>
                            <tr>
                                <td>message</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>string</label></td>
                                <td>yes</td>
                                <td>Message to be displayed.</td>
                            </tr>
                            <tr>
                                <td>timer</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>number</label></td>
                                <td>no</td>
                                <td>Display time of toast in milliseconds.</td>
                            </tr>
                            <tr>
                                <td>animate</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>fade-in-out</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>zoom-in-out</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>stretch-in-out</label></td>
                                <td>no</td>
                                <td>Popup out animation of the toast.</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>

                    <label style={{marginTop: "30px", marginBottom: "25px", fontWeight: "600", fontSize: "1.2rem"}}>Custom Toast Props</label>

                    <div>
                        <Table size="sm" style={{color: 'rgba(0, 0, 0, 0.7)'}}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Mandatory</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>position</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>top</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>middle</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>bottom</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>XX%</label></td>
                                <td>no</td>
                                <td>Popup out position of the toast.</td>
                            </tr>
                            <tr>
                                <td>message</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>string</label></td>
                                <td>yes</td>
                                <td>Message to be displayed.</td>
                            </tr>
                            <tr>
                                <td>backgroundColor</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>string</label></td>
                                <td>yes</td>
                                <td>Background Color of toast.</td>
                            </tr>
                            <tr>
                                <td>color</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>string</label></td>
                                <td>yes</td>
                                <td>Text Color of toast.</td>
                            </tr>
                            <tr>
                                <td>toastIcon</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>JSX.Element</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>Font Awesome Icons</label></td>
                                <td>no</td>
                                <td>Icon indicating toast type.</td>
                            </tr>
                            <tr>
                                <td>closeIcon</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>JSX.Element</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>Font Awesome Icons</label></td>
                                <td>no</td>
                                <td>Icon replacing default close icon.</td>
                            </tr>
                            <tr>
                                <td>timer</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>number</label></td>
                                <td>no</td>
                                <td>Display time of toast in milliseconds.</td>
                            </tr>
                            <tr>
                                <td>animate</td>
                                <td><label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>fade-in-out</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>zoom-in-out</label>, <label style={{background: "rgba(76, 106, 220, 0.2)", padding: "2px 4px 2px 4px", borderRadius: "3px"}}>stretch-in-out</label></td>
                                <td>no</td>
                                <td>Popup out animation of the toast.</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>

            </div>
        </>
    )
}

export default Home;