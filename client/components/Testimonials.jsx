import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav'
import Footer from './Footer'

class Testimonials extends React.Component {


    render() {
        return (
            <React.Fragment> 
                    <Nav/>
                    <div className="background">
                <img src="./img/logo.png" alt="Main logo" id="mainLogo" className="centerImg"></img>
                <img src="./img/testimonials.png" alt="Main logo" id="testLogo" className="centerImg"></img>
                </div>
                <div id="testArea">
                    <p>test</p>
                </div>
                    <Footer />

            </React.Fragment>
        )
    }
}

export default Testimonials