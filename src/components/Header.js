import React, {Component} from "react";

export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData; 
 
        
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a> */}
         

                        <ul id="nav" className="menu">
                            <li><a className="navbar-links" href="#home">Home</a></li>
                            <li><a className="navbar-links" href="#about">About</a></li>
                            <li><a className="navbar-links" href="#education">Education</a></li>
                            <li><a className="navbar-links" href="#skills">Skills</a></li>
                            <li><a className="navbar-links" href="#projects">Projects</a></li>
                        </ul>
                    </nav>
                    
                    <div className="header-container">
                        <img id="header-img" src={resumeData.headerImage} alt=""/> 
                        <div id="header-text">
                            <h1 id="header-title">I am Philip.</h1>
                            <br></br><br></br>
                            <p id="header-paragraph">
                                Software developer dwelling into the frontend world <br/>
                                by exploring the elements of design and technology. 
                            </p>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}