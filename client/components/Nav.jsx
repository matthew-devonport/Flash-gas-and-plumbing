import React from 'react';
import { HashRouter as NavLink, Link } from 'react-router-dom';

import PopUpBox from './PopUpBox'
import Form from './Form'

class Nav extends React.Component {
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
                    <img src="./img/text.png" alt="Main Logo" className="leftLogos"></img>
                </div>
                <div className="flexBox">
                    <div className="fixed">
                        <img src="./img/about.png" alt="About logo" className="navLogos"></img>
                        <img onClick={() => this.togglePopup(this.contactForm)} src="./img/contact us.png" alt="Contact logo" className="navLogos"></img>
                        <Link to='/gallery'><img src="./img/gallery.png" alt="Gallery logo" className="navLogos"></img></Link>
                        <img src="./img/testimonials.png" alt="Testimonials logo" className="navLogos"></img>
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
export default Nav