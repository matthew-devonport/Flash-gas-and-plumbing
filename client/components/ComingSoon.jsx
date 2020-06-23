import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav'
import Footer from './Footer'

class ComingSoon extends React.Component {


    render() {
        return (
            <React.Fragment> 
                    <Nav/>
                <img src="./img/logo.png" alt="Main logo" id="mainLogo" className="centerImg"></img>
                <div id="comingSoon">
                <p>Coming Soon</p>
                </div>  
                    <Footer />

            </React.Fragment>
        )
    }
}

export default ComingSoon