import React, {Component} from "react";

export default class About extends Component {
    render () {
        let resumeData = this.props.resumeData;

        return (
            <section id="about">
                <div className="row">
                    <div className="nine columns main-col">
                        <div className="three columns">
                        <img className="profile-pic" src="images/profile.jpg" alt="" />
                    </div>
                        <p id="about-paragraph">      
                            I am currently a Masters student at University of Bergen and pursuing my master in Media and Interaction Design. 
                            <br></br>
                            I have knowledge in backend-developing from my bachelordegree, currently diving into the frontend-developing world.
                            </p>
                    </div>
                    <div className="row">
                        <div className="introduction">
                            <h2>Introduction</h2>
                            <p className="address">
                                <span>Name: {resumeData.name}</span>
                                <br></br>
                                <span>Location: {resumeData.address}</span>
                                <br></br>
                                <span>Age: {resumeData.age}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}