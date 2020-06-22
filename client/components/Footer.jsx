import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';

class Footer extends React.Component {



    render() {
        return (
            <React.Fragment>
                <div id='footer'>
                    <footer>
                        <div className="footerFlex">
                        <div className="leftFooter">
                            <h1 className="contactInfo">CONTACT INFO</h1>
                            <a href="tel:0272435274"><img src="./img/phone-number.png" alt="Phone logo" className="phoneLogo"></img> </a>
                    <a href="mailto:flashgasandplumbing@gmail.com"><img src="./img/email.png" alt="Emaillogo" className="emailLogo"></img></a>
                       </div>
                       <div className="footer-nav">
                       <h1 className="socialmedia">SOCIAL MEDIA</h1>
                       <div className="socialLinks">
                           <Link><img src="./img/facebook.png" alt="Facebook logo" className="footerLogo facebook"></img> </Link>
                           <Link><img src="./img/instagram.png" alt="Instagram logo" className="footerLogo instagram"></img> </Link>
                        </div>
                        </div>
                        </div>
                        <p className="copyrightText">
                            Copyright &copy; Flash Gas and Plumbing. All rights reserved.<br />
                            <a href="https://github.com/matthew-devonport" target="_blank" className="matty">Website Design &amp; Build by Matthew Devonport</a>
                        </p>
                    </footer>
                </div>

            </React.Fragment>
        )
    }
}


export default Footer