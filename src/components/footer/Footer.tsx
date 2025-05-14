

import React from 'react';
import './Footer.css';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mark Garcia</h3>
            <p>Full Stack Developer</p>
            <p>Creating digital experiences that matter</p>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/mark-garcia-aa9b2b306/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/MarkRyanGarcia" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mark Garcia. All rights reserved.</p>
        </div>
      </footer>
    );
}

export default Footer;