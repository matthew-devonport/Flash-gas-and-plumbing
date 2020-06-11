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
                        <div className="aboutItem centerImg"><img src="./img/about.png"></img></div>
                        <div className="aboutItem centerImg">
                        Introducing Campbell Winter,Certified Gasfitter,plumber and Director
                        for the Company established in 2020.Campbell is no newcomer to the industry 
                        having honed his skill set over 11 years to give both the balance of youthful 
                        enthusiasm and experience in the field.The Company’s target market is for 
                        customers with high expectations of  workmanship and communication and to deliver 
                        to them a value added service.</div>
                        <div className="aboutItem centerImg"><h1>WHY CHOOSE US?</h1></div>
                        <div className="aboutItem centerImg">
                        *personalised service where customer deals directly 
                        with the business owner and tradesman
                        * Campbell is a Certified Gasfitter
                        *emaculate,guaranteed workmanship
                        *ability to project manage and coordinate with other trades
                        *respect for customers homes or place of business when working
                        *carry out gas and plumbing warrant of fitnesses for homes and business premises
                        *highest standards of personal appearance,use of PPE and WorkSafe practices
                        *absolute integrity to ensure customer satisfaction</div>
                    </div>
                </div>
                <Footer />
      </React.Fragment>
    )
  }
}

export default About