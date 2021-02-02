import React, {Component} from "react";

export default class Work extends Component {
    render () {
        let resumeData = this.props.resumeData;
    

        return (
            <section id="work">
                <h1 id="work-title">Work Experience</h1>
                <div className="work-section">
                    <div className="work-row">
                        {resumeData.work && resumeData.work.map((item, index)=> {
                            return (
                                <div className="work-item" key={index}>
                                    <div className="work-image-container">
                                        <img className="work-image" src={item.WorkIcon}/>
                                    </div>
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
                </div>
            </section>
        );
    }
}