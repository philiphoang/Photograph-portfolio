import React, {Component} from "react";

export default class About extends Component {
    render () {
        let resumeData = this.props.resumeData; 

        return (
            <section id="about">
                <div className="about-container">
                    <div className="profile-container">
                        <img id="profile-pic" src={resumeData.profileImage} alt="" />
                    </div>
                    <p id="about-paragraph">      
                            Currently a <span className="highlight">Masters student</span> at University of Bergen and pursuing my master in Media and Interaction Design.<br/> 
                            I have knowledge in <span className="highlight">backend-developing</span> from my bachelordegree, <br/>and currently diving into the <span className="highlight">frontend-developing</span> world.
                    </p>
                    <p id="about-interests">
                        I have also artistic interest in <span className="highlight">fashion and style</span>, and a deep passion for <span className="highlight">cooking</span>. <br/>
                        Check out my <span className="highlight-instagram">Instagram</span> feed further below to see my type of clothing style!
                    </p>
                </div>
            </section>
        );
    }
}