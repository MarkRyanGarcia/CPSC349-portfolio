import "./Header.css";
import { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const buttons = {
        Home: "home",
        About: "about",
        Projects: "projects",
        Skills: "skills",
        // Contact: "contact",
    };

    useEffect(() => {
        const handleScroll = () => {
            // Change header style when scrolled past 100px (adjust as needed)
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-name">
                Mark Garcia
            </div>
            
            <button 
                className="hamburger-menu" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </button>

            <div className={`header-buttons ${isMenuOpen ? 'open' : ''}`}>
                {Object.entries(buttons).map(([label, id]) => (
                    <button
                        key={label}
                        className="header-button"
                        onClick={() => scrollToSection(id)}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </header>
    );
};

export default Header;