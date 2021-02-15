import React from 'react';
import { HashRouter as NavLink, Link } from 'react-router-dom';

import PopUpBox from './PopUpBox'
import Form from './Form'

class AboutNav extends React.Component {
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

    render() {
        return (
            <div id="navBackground">
                <div className="leftNav fixed">
                <Link to='/'><img src="./img/text.png" alt="Main Logo" className="leftLogos homeLogo"></img></Link>
                </div>
                <div className="flexBox">
                    <div className="fixed">
                        <img src="./img/about-1.png" alt="About logo" className="navLogoPage"></img>
                                                <a href="https://www.jotform.com/form/210036267796864" target="_blank">
                        <img src="./img/contact-1.png" alt="Contact logo" className="navLogoPage"></img>
                        </a>
                        <Link to='/gallery'><img src="./img/gallery.png" alt="Gallery logo" className="navLogos"></img></Link>
                        <Link to='/testimonials'><img src="./img/testimonials.png" alt="Testimonials logo" className="navLogos"></img></Link>
                    </div>
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
            </div>
        )
    }
    
    contactForm = (
        <div>
            <img src="./img/logo-number.png" className="formImage centerImg" />
            <Form />
        </div>
    )


}
export default AboutNav