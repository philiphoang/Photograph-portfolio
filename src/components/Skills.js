import React, {Component} from "react";

export default class Skills extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="skills">
                <div className="row-skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div id="skills-section">
                        <ul className="ul-skills">
                            {resumeData.skills && resumeData.skills.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <li>
                                            <span className="skillName"> {item.skillname}</span>
                                            <div className="progressBar"><div></div></div>
                                            <div className="progressBar"><div></div></div>
                                            <div className="progressBar"><div></div></div>
                                            <div className="progressBar"><div></div></div>
                                            <div className="progressBar"><div></div></div>
                                        </li>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}