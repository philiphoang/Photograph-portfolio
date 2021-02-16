import React, {Component} from "react";

import TalkieHorizontal from "../assets/Project-Talkie/Talkie-Horizontal.png";
import PhilipandTalkie1 from "../assets/Project-Talkie/PhilipandTalkie1.jpg";
import PhilipandTalkie2 from "../assets/Project-Talkie/PhilipandTalkie2.JPG";
import WorkingPhilip from "../assets/Project-Talkie/WorkingPhilip.jpg";


export default class Projects extends Component {
    constructor() {
        super();
        this.expandImage = this.expandImage.bind(this);
    }

    

    expandImage = (imgs) => {
        console.log("Clicked");
        console.log(imgs.src);

        var expandingImg = document.getElementById("expandedImage");
        console.log(expandingImg)

        expandingImg.src = imgs;

        expandingImg.parentElement.style.display = "block";
    }

    render() {
        let resumeData = this.props.resumeData;
        let project1 = resumeData.project1;
        // let project2 = resumeData.project2;
        // let project3 = resumeData.project3;
        return (
            <section id="projects">
                <h1>Selected Projects</h1>
                <div id="project1">
                    
                    <h3>{project1.name}</h3>
                    <h4>{project1.subtitle}</h4>

                    <div className="container-gallery">
                        <img src={TalkieHorizontal} id="expandedImage"/>
                    </div>

                    {/* Thumbnails */}
                    <div className="row-gallery">

                        <div className="column-gallery">
                            <img src={TalkieHorizontal} alt="" onClick={()=> this.expandImage(TalkieHorizontal)}/>
                        </div>
                        <div className="column-gallery">
                            <img src={PhilipandTalkie1} alt="" onClick={()=> this.expandImage(PhilipandTalkie1)}/>
                        </div>
                        <div className="column-gallery">
                            <img src={PhilipandTalkie2} alt="" onClick={()=> this.expandImage(PhilipandTalkie2)}/>
                        </div>
                        <div className="column-gallery">
                            <img src={WorkingPhilip} alt="" onClick={()=> this.expandImage(WorkingPhilip)}/>
                        </div>
                        
                    </div>

                    <div className="project1-text">
                        <p>

                            Talkie is a robot that interacts and engages a conversation with children. It is small, toylike, <br/>
                            and has a screen that can show images and videos that is relevant to their conversation. <br/>
                            Talkie is interactive, allowing it to build relationship and make sure the child stays interested and<br/>
                             engaged in the conversation. With Converational AI, Talkie is able to learn and adapt to different topics <br/>
                            and conversations. Talkie also has an emotion system and is able to express a range of emotions with <br/>
                            both its facial expressions, movements and verbally. This enables Talkie to sympathize with the child <br/> 
                            and have a emotional reacations to the child's conversations and behaviour.                          
                        </p>         
                        <ul className="project1-keywords"> 
                        <p>Keywords: </p>
                           {project1.keywords.map((item, index) => {
                               return (
                                   <div key={index}>
                                       <li>
                                           <p><span>{item}</span></p>
                                       </li>
                                   </div>
                               )
                           })} 
                        </ul>
                    </div>

                </div>
                {/* <div id="project2">
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
                <   div className="project3-image">
                        <img src={project3.imageurl} alt=""/>
                    </div>
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
                 
                </div> */}

            </section>
        );
    }
}