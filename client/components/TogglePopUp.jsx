import React from 'react'

class TogglePopUp extends React.Component {



  togglePopup = () => {
    this.setState({
      popupIsShowing: !this.state.popupIsShowing
    })
  }


  render() { null }
}

export default TogglePopUp