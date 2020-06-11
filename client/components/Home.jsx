import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom';

import Title from './Title'
import Services from './Services'
import ServicesTitle from './ServicesTitle'
import Nav from './Nav'
import Footer from './Footer'
import PopUpBox from './PopUpBox'
class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          popupImageId: null,
        }
      }
    
      togglePopup(id = null) {
        this.setState((state, props) => ({
          popupImageId: id,
        }))
      }

    render() {
        return (
            <React.Fragment> 
                    <Nav/>
                <div>
                    <Title />
                    <ServicesTitle />
                    <Services />
                    <Footer />
                </div>  
            </React.Fragment>
        )
    }
}

export default Home