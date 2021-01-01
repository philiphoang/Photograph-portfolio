import React, {Component} from "react";

export default class Skills extends Component {
    constructor() {
        super();
        this.createProgressBar = this.createProgressBar.bind(this);
    }

    createProgressBar(item) {
        const filledProgressBar = [];

        for (let i = 0; i < item.level; i++) {
            filledProgressBar.push(<div className="progressBar-with-bg"></div>)            

        }

        for (let i = 0; i < (5-item.level); i++) {
            filledProgressBar.push(<div className="progressBar"></div>)            
        }

        return (
            <div className="progressBar-wrapper">
                {filledProgressBar}
            </div>
        )
    }        

    render() {
        let resumeData = this.props.resumeData;

        return (
            <section id="skills">
                <div className="row-skill">
                    <h1><span>Skills</span></h1>
                    <div id="skills-section">
                        <ul className="ul-skills">
                            {resumeData.skills && resumeData.skills.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <li>
                                            <span className="skillName"> {item.skillname}</span>
                                            {this.createProgressBar(item)}
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