import React, {Component} from "react";

export default class Footer extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <footer>
                    <div className="social">
                        <h2>Socials</h2>
                        <div className="social-wrapper">
                            <ul className="social-ul">
                                {resumeData.socialLinks && resumeData.socialLinks.map((item, index) =>{
                                    return(
                                        <div className="social-items" key={index}>
                                            <li>
                                                <a href={item.url}>
                                                    <i className={item.className} />
                                                    <img src={item.imgsrc} alt=""/>
                                                </a>
                                            </li>
                                        </div>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <i className="icon-up-open"/>
                        </a>
                    </div>
            </footer>
        );
    }
}