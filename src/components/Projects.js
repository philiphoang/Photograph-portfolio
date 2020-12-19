import React, {Component} from "react";

export default class Projects extends Component {
    render() {
        let resumeData = this.props.resumeData;
        let project1 = resumeData.project1;
        let project2 = resumeData.project2;
        let project3 = resumeData.project3;
        return (
            <section id="projects">
                <h1>Projects</h1>
                <div id="project1">
                    <div className="project1-text">
                        <h3>{project1.name}</h3>
                        <h4>{project1.subtitle}</h4>
                        <p>
                            Talkie is a social interview robot that interacts and engages a conversation with children. 
                            Talkie is small, cute and toylike. Talkie can show images and videos on the screen and play music that is relevant to their conversation. 
                            Making Talkie interactive establish trust between Talkie and the child, and make sure the child stays interested and engaged in the conversation.
                            With Converational Artificial Intelligence, Talkie is able to learn and adapt to different topics and conversations. 
                            Talkie also has an emotion system and is able to express a range of emotions with both its facial expressions, movements and verbally. 
                            This enables Talkie to sympathize with the child and have a emotional reacations to the child's conversations and behaviour.

                        </p>
                    </div>
                    <img src={project1.imageurl} alt=""/>

                </div>
                <div id="project2">
                    <img src={project2.imageurl} alt=""/>
                    <div className="project2-text">
                        <h3>{project2.name}</h3>
                        <h4>{project2.subtitle}</h4>

                        <p>
                        TANGY is a digital wellbeing coach for smartphones that actively reminds the user of their screen time. 
                        Visually, the application is represented by an avatar that floats above other applications on a user's smartphone. 
                        At its core, TANGY is a timer that keeps track of the time the user spends in respective applications. 
                        When the timer exceeds the set threshold for the specific app in use, it will actively give feedback about the usage to the user in the form of an animation and a pop-up notification. 
                        The goal of TANGY is to increase awareness of application time and alter habit through a sense of social control.
                        </p>
                    </div>
                </div>
                <div id="project3">
                    <div className="project3-text">
                        <h3>{project3.name}</h3>
                        <h4>{project3.subtitle}</h4>
                        <p>
                            Visualization of algorithms and datastructures is a learning platform build for INF102 Algorithms, datastructures and programming, a course at the University of Bergen.
                            The platform offers six different algorithms with visualization for each of them. 
                            The visualizations is also interactive which allows you to carefully analyze each steps in the algorithm at your preferred speed. 
                            This project were build under the course INF219 Informatic project with a total of three students.
                        </p>
                    </div>
                    <div className="project3-image">
                        <img src={project3.imageurl} alt=""/>
                    </div>
                </div>

            </section>
        );
    }
}