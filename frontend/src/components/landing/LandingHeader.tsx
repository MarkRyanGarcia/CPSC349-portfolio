import { useNavigate } from "react-router-dom";
import "./Landing.css"

const LandingHeader = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/signup")
    };

    return (
        <header className="landing-header">
            <img src="/logo.png" alt="logo" />
            <div className="header-buttons">
                <button className="header-button" onClick={handleSignIn}>
                    Sign In
                </button>
            </div>
        </header>
    )
};

export default LandingHeader;