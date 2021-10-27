import {para, CovidMeasures } from "./CovidMeasures";
import "./covid.css";

function Covid(){
        return(
            <div className="start">
                <div className="covid">
                    <div>
                        <h4>
                            Hi Zhoopers,
                        </h4>
                        <div className="para">
                            {para.map((item, index) => {
                                return(
                                    <div>
                                        <h5>{item.title}</h5>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div style={{margin: "50px 0"}}>
                        {CovidMeasures.map((item, index) => {
                            return(
                                <div className="safe">
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                    <div className="points">
                                        <h5>{item.content1}</h5>
                                        <h5>{item.content2}</h5>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <h5>While your convenience continues to be priority for us, your safety is just as important.</h5>
                    </div>
                    <div style={{marginTop: "30px"}}>
                        <h5>Stay safe and stay Supr Daily!</h5>
                    </div>
                </div>
            </div>
        )
}

export default Covid;