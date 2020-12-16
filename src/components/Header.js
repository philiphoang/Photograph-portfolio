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

                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#education">Education</a></li>
                            <li><a className="smoothscroll" href="#skills">Skills</a></li>
                            <li><a className="smoothscroll" href="#projects">Projects</a></li>
                        </ul>
                    </nav>
                    
                    <div class="header-container">
                        <img id="header-img" src="images/john-towner-JgOeRuGD_Y4-unsplash.jpg"/> 
                        <div id="header-text">
                            <h1 id="header-title">I am Philip.</h1>
                            <br></br><br></br>
                            <p id="header-paragraph">
                                Software developer dwelling into the frontend world <br></br>by exploring the elements of design and technology. 
                            </p>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}