import "./Header.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const buttons = {
    Home: "home",
    // About: "about",
    Projects: "projects",
    // Skills: "skills",
    Contact: "contact",
    Resume: "resume",
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    if (id === "resume") {
      return;
    } else if (id === "home") {
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
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-name">Mark Garcia</div>

      <button
        className="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>

      <div className={`header-buttons ${isMenuOpen ? "open" : ""}`}>
        {Object.entries(buttons).map(([label, id]) =>
          id != "resume" ? (
            <button
              key={label}
              className="header-button"
              onClick={() => handleClick(id)}
            >
              {label}
            </button>
          ) : (
            <a
              key={label}
              href="https://github.com/MarkRyanGarcia/Resume/blob/main/resume.pdf"
              className="header-button"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          )
        )}
      </div>
    </header>
  );
};

export default Header;
