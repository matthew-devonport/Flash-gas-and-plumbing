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
                    <h1 className="testTitle">Here are what some of our clients say!</h1>
                    <div className="testText">"Had our old hot water cylinder die on us recently. Flash gas and plumbing came out, 
                       installed new cylinder but unfortunately the pipes under the house were not up to the task. 
                       So an infinity gas water system was installed. Wow what a difference, pressure is out of this world.
                       Big ups to Cam, was a nightmare job but he was equal to the task. Highly recommend to anyone."<br/><br/> - <i>Andrew Gunn</i></div>
                    <div className="divider"></div>
                    <div className="testText">"Cam provided an efficient and highly professional service. We’re delighted to finally have constant hot running water for the whole family.
                       Very neat job. Thanks Cam!"<br/><br/> - <i>Hugo Buckley</i></div>
                    <div className="divider"></div>
                    <div className="testText">"Super quick to fit us in and did a great job, really happy to not hear a dripping shower every night now! Will definitely be recommending
                       to anybody that needs a plumber."<br/><br/> - <i>Jordan Bottriell</i></div>
                    <div className="divider"></div>
                    <div className="testText">"Cam worked with best care and respect during -what surprisingly turned into- an extremely tricky job! He managed the complexity of a total
                       revamp to the hot water supply and installing an Infinity Gas Hot Water completing this work around the tenant. He left his work spaces very 
                       tidily, kept in contact with me throughout, sending me pictures of progress and finish so as an absentee owner I have a good picture of the 
                       new installation. The tenant is delighted with new pressure and heat of the water. Given this turned into a major overhaul instead of hot 
                       water cylinder replacement, Cam kept me posted with the change of pricing, helped out to minimise costs and updated me throughout. Highly 
                       recommend to all! - Big thanks, Cam!"<br/><br/> - <i>Katja Widder</i></div>
                    <div className="divider"></div>
                    <div className="testText bottomText">"After a week of no hot water and unable to get a plumber to come or any callbacks, Cam was able to fit me in the day I called and had a
                       quote for me within 24 hours. Job completed today first thing after the weekend. Thanks for the priority being a hot water emergency, so looking forward to a hot
                       shower tonight. Helpful, good communication, fair and personable. I am happy to recommend."<br/><br/> - <i>Cheryl White</i></div>        
                </div>
                    <Footer />

            </React.Fragment>
        )
    }
}

export default Testimonials