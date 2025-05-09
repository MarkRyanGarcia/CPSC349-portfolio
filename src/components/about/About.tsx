import React from 'react';
import './About.css';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <header className="about-header">
                    <h1 className="about-main-title">About <span className="highlight">Me</span></h1>
                    <p className="about-tagline">Full Stack Developer with a passion for building exceptional digital experiences</p>
                </header>

                <div className="about-grid">
                    {/* Profile Section */}
                    <div className="profile-card about-card">
                        <h2 className="section-title">My Background</h2>
                        <div className="profile-content">
                            <p className="profile-text">
                            I’m a Computer Science student at California State University, Fullerton, graduating in May 2026 with a minor in Mathematics.
                            I’m passionate about front-end and full-stack development, and I enjoy bringing ideas to life through clean, interactive user experiences.
                            </p>
                            <p className="profile-text">
                            My journey began in high school when I took AP Computer Science Principles and fell in love with programming.
                            At CSUF, I joined the Association for Computing Machinery (ACM), where I’ve continued growing through workshops, projects, and leadership opportunities.
                            As the Marketing Lead for the club, I led the team that promoted attendance and involvement, collected photographs of all our events, and assisted in
                            organizing FullyHacks 2025, one of our biggest events of the year.
                            </p>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="skills-card about-card">
                        <h2 className="section-title">Technical Skills</h2>
                        <div className="skills-grid">
                            <div className="skill-category">
                                <h3 className="skill-category-title">Web Development</h3>
                                <ul className="skill-list">
                                    <li className="skill-item">React</li>
                                    <li className="skill-item">Svelte</li>
                                    <li className="skill-item">TypeScript/JavaScript</li>
                                    <li className="skill-item">HTML & CSS</li>
                                    <li className="skill-item">Responsive Design</li>
                                    <li className="skill-item">FastAPI</li>
                                    <li className="skill-item">Flask</li>
                                </ul>
                            </div>
                            
                            <div className="skill-category">
                                <h3 className="skill-category-title">Game Development</h3>
                                <ul className="skill-list">
                                    <li className="skill-item">Unity Engine</li>
                                    <li className="skill-item">Godot Engine</li>
                                </ul>
                            </div>
                            
                            <div className="skill-category">
                                <h3 className="skill-category-title">Other</h3>
                                <ul className="skill-list">
                                    <li className="skill-item">Git & GitHub</li>
                                    <li className="skill-item">UI/UX Principles</li>
                                    <li className="skill-item">Game Development</li>
                                    <li className="skill-item">Soft Skills</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="experience-card about-card">
                        <h2 className="section-title">Professional Experience</h2>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h3 className="job-title">Supplemental Instruction (SI) Leader</h3>
                                </div>
                                <span className="job-date">Jan 2024 - Present</span>
                                <ul className="job-description">
                                    <li>Develop comprehensive study materials to simplify calculus concepts, resulting in 10% average grade improvement</li>
                                    <li>Utilize innovative teaching techniques including group discussions and collaborative learning</li>
                                </ul>
                            </div>
                            
                            <div className="timeline-item">
                                <div className="timeline-header">
                                    <h3 className="job-title">McDonalds Crew Trainer</h3>
                                </div>
                                <span className="job-date">June 2022 - May 2025</span>
                                <ul className="job-description">
                                    <li>Managed multiple stations to ensure efficient workflow and excellent customer service</li>
                                    <li>Trained new hires, creating a positive and motivating atmosphere</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="education-card about-card">
                        <h2 className="section-title">Education</h2>
                        <div className="education-item">
                            <h3 className="degree-title">B.S. in Computer Science</h3>
                            <div className="education-details">
                                <span className="institution-name">Califonia State University Fullerton</span>
                            </div>
                            <span className="education-date">2022 - 2026</span>
                            <ul className="education-description">
                                <li>GPA: 3.84/4.0</li>
                                <li>Minor in Mathematics</li>
                            </ul>
                        </div>
                    </div>

                    {/* Interests Section */}
                    <div className="interests-card about-card">
                        <h2 className="section-title">Interests</h2>
                        <div className="interests-list">
                            <div className="interest-item">
                            <div className="interest-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#045A97" d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z"/>
                                </svg>
                            </div>
                            <span className="interest-label">Rubik's Cubes</span>
                            </div>
                            <div className="interest-item">
                            <div className="interest-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="#045A97" d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                                </svg>
                            </div>
                            <span className="interest-label">Game Dev</span>
                            </div>
                            <div className="interest-item">
                            <div className="interest-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="#045A97" d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/>
                                </svg>
                            </div>
                            <span className="interest-label">Hiking</span>
                            </div>
                            <div className="interest-item">
                            <div className="interest-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path fill="#045A97" d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"/>
                                </svg>
                            </div>
                            <span className="interest-label">Traveling</span>
                            </div>
                            <div className="interest-item">
                            <div className="interest-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="#045A97" d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"/>
                                </svg>
                            </div>
                            <span className="interest-label">Food</span>
                            </div>
                            <div className="interest-item">
                            <div className="interest-icon">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="#045A97" d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                                </svg>
                            </div>
                            <span className="interest-label">Learning</span>
                            </div>
                        </div>
                    </div>

                    {/* Resume Download Section */}
                    <div className="resume-card about-card">
                        <h2 className="section-title">My Resume</h2>
                        <div className="resume-content">
                            <p className="resume-text">
                                Visit my complete resume to view my full professional background, skills, and achievements.
                            </p>
                            <a 
                                href="https://drive.google.com/file/d/1enBVVC-l8nc3DttrY6mRt-jK4pTvLOLW/view?usp=sharing" 
                                target="_blank"
                                className="resume-download-button"
                            >
                                View Resume
                                <svg className="download-icon" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M5 20h14v-2H5v2zm7-18L5.33 8.67 6.67 10l4.33-4.33V16h2V5.67l4.33 4.33 1.34-1.33L12 2z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;


