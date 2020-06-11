import React from 'react'

class ServicesPopUpBox extends React.Component {

  render() {
    let { content, togglePopup } = this.props
    return (
      <React.Fragment>
        <div id='popup-overlay-services'>
            <div id='popup-content'>
            {content}
            </div>
            <a id='popup-close-services' onClick={togglePopup}>
              &times;
            </a>
        </div>}
      </React.Fragment>
    )
  }
}

export default ServicesPopUpBox 