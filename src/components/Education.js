import React, {Component} from "react";

export default class Education extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="education">
                    <h1>
                        <span>Education</span>
                    </h1>
                    <div className="education_section">
                        <div className="education_row">
                            {resumeData.education && resumeData.education.map((item, index) => {
                                return (
                                    <div className="row item" key={index}>
                                        <div className="education_item">
                                            <div className="education_image_container">
                                                <img className="education_image" src={item.EducationIcon}/>
                                            </div>
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
                    </div>
            </section>
        );
    }
}