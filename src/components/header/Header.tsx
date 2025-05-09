import "./Header.css"

const Header = () => {
    const buttons = {
        Home: "home",
        About: "about",
        Projects: "projects",
        Skills: "skills",
        Contact: "contact",
    };

    const scrollToSection = (id: string) => {
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <header className="header">
            <div className="">
                Mark Garcia
            </div>
            <div className="header-buttons">
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