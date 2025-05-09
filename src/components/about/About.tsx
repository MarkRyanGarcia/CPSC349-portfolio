import React from 'react';
import './About.css';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    return (
        <section id="about" className="About-section">
            <div className="About-content">
                <div className="About-text">
                    <h1 className="About-title">👋 Hi, I'm <span className="highlight">Mark :)</span></h1>
                    <p className="About-intro">
                        An undergraduate student at <span className="highlight">CSU Fullerton 🐘</span> | CS Major, Math Minor
                    </p>
                    <p className="About-description">
                        I'm a full-time student while working two jobs, but I'm still trying to find time to work on projects! 😄
                    </p>
                    <ul className="About-list">
                        <li>📷 <span className="highlight">Marketing Team Lead</span> for ACM at CSUF</li>
                        <li>📐 <span className="highlight">Supplemental Instructor</span> for Calculus II (because Math is just so fun!)</li>
                        <li>💻 I have experience with: Python, C/C++, C#, JavaScript, Typescript, HTML/CSS, GDScript, Intel x86-64 ISA, SQL, and always learning more...</li>
                        <li>💯 Fun fact: I have a collection of <span className="highlight">60+ Rubik's Cubes</span></li>
                    </ul>
                </div>
                <div className="About-image-container">
                    <img
                        src="/src/assets/mark.png"
                        alt="Mark Garcia"
                        className="About-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;