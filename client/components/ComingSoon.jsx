import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav'
import Footer from './Footer'

class ComingSoon extends React.Component {


    render() {
        return (
            <React.Fragment> 
                    <Nav/>
                <div>
                <img src="./img/logo.png" alt="Main logo" id="mainLogo" className="centerImg"></img>
                <p id="comingSoon">Coming Soon</p>
                    <Footer />
                </div>  
            </React.Fragment>
        )
    }
}

export default ComingSoon