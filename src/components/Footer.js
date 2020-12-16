import React, {Component} from "react";

export default class Footer extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <footer>
                    <div className="social">
                        <h2>Socials</h2>
                        <ul className="social-links">
                            {resumeData.socialLinks && resumeData.socialLinks.map((item) =>{
                                return(
                                    <li>
                                        <a href={item.url}>
                                            <i className={item.className} />
                                            <img src={item.imgsrc}/>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
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