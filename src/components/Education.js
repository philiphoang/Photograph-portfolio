import React, {Component} from "react";

export default class Education extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>
                    <div className="education_section">
                        {resumeData.education && resumeData.education.map((item, index) => {
                            return (
                                <div className="row item" key={index}>
                                    <div className="education_item">
                                        <h3>{item.UniversityName}</h3>
                                        <p className="info">
                                            {item.specialization}
                                            <span>&bull;</span> <em className="data">
                                                {item.YearOfPassing}
                                            </em>
                                        </p>
                                        <p>{item.Achievements}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
            </section>
        );
    }
}