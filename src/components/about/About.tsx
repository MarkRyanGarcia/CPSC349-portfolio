import React from 'react';
import './About.css';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    return (
        <section id="about" className="About-section">
            <div className="About-content">
                <div className="About-text">
                    <h1 className="About-title"><span className="highlight">About Me</span></h1>
                    
                    <div className="About-section-block">
                        <h2 className="About-subtitle">Background</h2>
                        <p className="About-description">
                            I'm a passionate Full Stack Developer with over 2 years of experience building web applications. 
                            I specialize in creating responsive, accessible, and performant web experiences using modern technologies.
                        </p>
                        <p className="About-description">
                            My journey in web development began during my university years when I built my first website for a local business. 
                            Since then, I've worked with established companies to deliver high-quality digital products.
                        </p>
                    </div>

                    <div className="About-section-block">
                        <h2 className="About-subtitle">Skills</h2>
                        <div className="skills-container">
                            <div className="skills-column">
                                <h3 className="skills-category">Frontend</h3>
                                <ul className="skills-list">
                                    <li>React</li>
                                    <li>Svelte</li>
                                    <li>TypeScript/JavaScript</li>
                                    <li>HTML & CSS</li>
                                    <li>Responsive Design</li>
                                </ul>
                            </div>
                            <div className="skills-column">
                                <h3 className="skills-category">Backend</h3>
                                <ul className="skills-list">
                                    <li>FastAPI</li>
                                    <li>Flask</li>
                                    <li>Node.js</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                            <div className="skills-column">
                                <h3 className="skills-category">Other</h3>
                                <ul className="skills-list">
                                    <li>Git & GitHub</li>
                                    <li>UI/UX Principles</li>
                                    <li>Game Development</li>
                                    <li>Soft Skills</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="About-section-block">
                        <h2 className="About-subtitle">Experience</h2>
                        
                        <div className="experience-item">
                            <h3 className="About-Experience-Title">Supplemental Instruction (SI) Leader</h3>
                            <ul className="Experience-list">
                                <li>Develop comprehensive study materials to simplify calculus I and calculus II concepts, resulting in a 10% average increase in student comprehension and grades.</li>
                                <li>Utilize innovative teaching techniques such as group discussions on practice problems and fostering collaborative study environments.</li>
                            </ul>
                        </div>

                        <div className="experience-item">
                            <h3 className="About-Experience-Title">McDonalds Crew Trainer</h3>
                            <ul className="Experience-list">
                                <li>Showcase expertise across multiple stations to ensure efficient workflow and excellent customer service.</li>
                                <li>Train new hires, creating a positive, motivating atmosphere for their development.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="About-section-block">
                        <h2 className="About-subtitle">Interests</h2>
                        <div className="interests-container">
                            <p className="About-description">
                                When I'm not coding, I enjoy:
                            </p>
                            <ul className="interests-list">
                                <li>Contributing to open source projects</li>
                                <li>Learning new programming languages and frameworks</li>
                                <li>Mentoring junior developers</li>
                                <li>Participating in hackathons and coding challenges</li>
                                <li>Exploring UI/UX design principles</li>
                                <li>Reading tech blogs and staying updated with industry trends</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;