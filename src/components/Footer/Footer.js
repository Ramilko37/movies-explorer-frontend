import React from 'react'
import './Footer.css'

const Footer = () => {
    return(
        <footer className="footer section">
        <span className="footer__copy">&copy; 2020</span>
        <div className="footer__links">
            <a href="#" className="footer__link">Яндекс.Практикум</a>
            <a href="#" className="footer__link">Github</a>
            <a href="#" className="footer__link">Facebook</a>
        </div>
    </footer>
    )
}

export default Footer;
