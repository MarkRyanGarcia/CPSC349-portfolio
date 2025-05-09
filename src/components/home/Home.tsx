import React from 'react';
import './Home.css';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <section id="home" className="Home-section">
            <div className="Home-content">
                <div className="Home-text">
                    <h1 className="Home-title">👋 Hi, I'm <span className="highlight">Mark :)</span></h1>
                    <p className="Home-intro">
                        An undergraduate student at <span className="highlight">CSU Fullerton 🐘</span> | CS Major, Math Minor
                    </p>
                    <p className="Home-description">
                        I'm a full-time student while working two jobs, but I'm still trying to find time to work on projects! 😄
                    </p>
                    <ul className="Home-list">
                        <li>📷 <span className="highlight">Marketing Team Lead</span> for ACM at CSUF</li>
                        <li>📐 <span className="highlight">Supplemental Instructor</span> for Calculus II (because Math is just so fun!)</li>
                        <li>💻 I have experience with: Python, C/C++, C#, JavaScript, Typescript, HTML/CSS, GDScript, Intel x86-64 ISA, SQL, and always learning more...</li>
                        <li>💯 Fun fact: I have a collection of <span className="highlight">60+ Rubik's Cubes</span></li>
                    </ul>
                </div>
                <div className="Home-image-container">
                    <img
                        src="/src/assets/mark.png"
                        alt="Mark Garcia"
                        className="Home-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;