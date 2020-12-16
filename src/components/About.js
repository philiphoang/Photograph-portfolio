import React, {Component} from "react";

export default class About extends Component {
    render () {
        let resumeData = this.props.resumeData;

        return (
            <section id="about">
                <div className="row">
                    <div className="nine columns main-col">
                        <div className="profile">
                            <img id="profile-pic" src="images/profile.jpg" alt="" />
                        </div>
                        <p id="about-paragraph">      
                            Currently a Masters student at University of Bergen and pursuing my master in <br></br> Media and Interaction Design. 
                            I have knowledge in backend-developing from my bachelordegree, and currently diving into the frontend-developing world.
                            </p>
                    </div>
                    {/* <div className="row">
                        <div className="introduction">
                            <p className="address">
                                <span>{resumeData.name}</span>
                                <br></br>
                                <span>{resumeData.address}</span>
                                <br></br>
                                <span>{resumeData.age}</span>
                            </p>
                        </div>
                    </div> */}
                </div>
            </section>
        );
    }
}