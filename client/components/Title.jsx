import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom';

import PopUpBox from './PopUpBox'
import Form from './Form'

class Title extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      popUpContent: null,
    }
  }

  togglePopup(id = null) {
    this.setState((state, props) => ({
      popUpContent: id,
    }))
  }

  

  render () {
    return (
        <React.Fragment>

      <div className="background">
          <img src="./img/logo.png" alt="Main logo" id="mainLogo" className="centerImg"></img>
          <img onClick={() => this.togglePopup(this.contactForm)} src="./img/enquire.png" alt="Main logo" id="enquireLogo" className="centerImg enquireStyles"></img>
      </div>
      {this.state.popUpContent !== null && (
          <PopUpBox
            togglePopup={() => this.togglePopup(null)} 
          >
            <div>
          {this.contactForm}
            </div>
          </PopUpBox>
        )}
   
      </React.Fragment>
    )
  }

  contactForm = (
    <div>
      <img src="./img/logo-number.png" className="formImage centerImg" />
      <Form />
    </div>
  )


}



export default Title