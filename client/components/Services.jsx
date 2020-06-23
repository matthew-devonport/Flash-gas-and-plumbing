import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom';

import ServicesPopUpBox from './ServicesPopUpBox'
import FlashPlumbing from './FlashPlumbing'
import FlashGas from './FlashGas'


class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      popupIsShowing: false
    }
  }

  popupContent = ''

  togglePopup = () => {
    this.setState({
      popupIsShowing: !this.state.popupIsShowing
    })
  }

  setPopup = (content) => {
    this.togglePopup(),
      this.popupContent = content
  }

  

  render () {
    return (
        <React.Fragment>

<div className="servicesBackground">
<div className="servicesFlex">  
          <img onClick={() => this.setPopup(this.flashPlumbing)} src="./img/FLASH PLUMBING.png" alt="Flash plumbing logo"  className="servicesLogo"></img>
          <img onClick={() => this.setPopup(this.flashGas)} src="./img/FLASH GAS.png" alt="Flash gas logo" className="servicesLogo"></img>
      </div>
      </div>
      {this.state.popupIsShowing && <ServicesPopUpBox content={this.popupContent} togglePopup={this.togglePopup}
            />}
        )
      </React.Fragment>
    )
  }

  flashPlumbing = (
    <div>
      <img src="./img/logo-services.png" className="formImage centerImg" />
      <FlashPlumbing />
    </div>
  )

  flashGas = (
    <div>
      <img src="./img/logo-services.png" className="formImage centerImg" />
      <FlashGas />
    </div>
  )
}



export default Services