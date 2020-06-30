import React from "react"

import Footer from './Footer'

class About extends React.Component {

  render() {
    return (
      <React.Fragment>
            <div className="background">
                <img src="./img/logo.png" alt="Main logo" id="mainLogo" className="centerImg"></img>
                <img src="./img/about.png" alt="About logo" id="aboutLogo" className="centerImg"></img>
                </div>
                <div id="aboutArea">
                    <div>
                        <div className="aboutItem">
                        Introducing Campbell Winter. Certified Gasfitter, plumber and Director
                        for the Company established in 2020.<br /><br /> 
                        Campbell is no newcomer to the industry 
                        having honed his skill set over 11 years to give both the balance of youthful 
                        enthusiasm and experience in the field. The Company’s target market is for 
                        customers with high expectations of  workmanship and communication and to deliver 
                        to them a value added service.</div>
                        <div className="aboutItem centerImg"><h1>WHY CHOOSE US?</h1></div>
                        <div className="aboutItem">
                          <ul>
                        <li>Personalised service where customer deals directly 
                        with the business owner and tradesman.</li><br /> 
                        <li>Campbell is a Certified Gasfitter.</li><br /> 
                        <li>Emaculate, guaranteed workmanship.</li><br /> 
                        <li>Ability to project manage and coordinate with other trades.</li><br /> 
                        <li>Respect for customers homes or place of business when working</li><br /> 
                        <li>Carry out gas and plumbing warrant of fitnesses for homes and business premises.</li><br /> 
                        <li>Highest standards of personal appearance, use of PPE and WorkSafe practices.</li><br /> 
                        <li>Absolute integrity to ensure customer satisfaction.</li><br /> 
                        </ul></div>
                    </div>
                </div>
                <Footer />
      </React.Fragment>
    )
  }
}

export default About