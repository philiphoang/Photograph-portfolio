import React, {Component} from "react";

export default class Work extends Component {
    render () {
        let resumeData = this.props.resumeData;
    

        return (
            <section id="work">
                <div className="work-row">
                    <h1>Work Experience</h1>
                </div>
                <div className="work-section">
                    {resumeData.work && resumeData.work.map((item)=> {
                        return (
                            <div className="work-item">
                                <h3>{item.CompanyName}</h3>
                                <p className="info">
                                    {item.specialization}
                                <span>&bull;</span> 
                                    <em className="data">
                                        {item.MonthOfStarting} {item.YearOfStarting} - {item.MonthOfLeaving} {item.YearOfLeaving}
                                    </em>
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}