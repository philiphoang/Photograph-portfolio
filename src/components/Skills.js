import React, {Component} from "react";

export default class Skills extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="skills">
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="skills-section">
                            <ul className="ul-skills">
                                {resumeData.skills && resumeData.skills.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <li>
                                                <span className="{`bar-expand $(item.skillname.toLowerCase()}`}"></span><em>{item.skillname}</em>
                                            </li>
                                        </div>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}