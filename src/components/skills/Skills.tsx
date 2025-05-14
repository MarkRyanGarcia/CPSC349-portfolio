import React from 'react';
import './Skills.css';

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className='skills-header'>
        <h1 className="skills-title">My <span className="highlight">Skills</span></h1>
        <p className="skills-tagline">
            A collection of my skills
        </p>
        </div>
        
        <div className="skills-grid">
          {/* Technical Skills */}
          <div className="skills-category">
            <h2 className="category-title">
              Technical Skills
            </h2>
            <div className="skills-list">
              <h3 className="skill-type">Frontend</h3>
              <ul>
                <li>React</li>
                <li>TypeScript/JavaScript</li>
                <li>HTML5 & CSS3</li>
                <li>Svelte</li>
                <li>Responsive Design</li>
              </ul>

              <h3 className="skill-type">Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>FastAPI</li>
                <li>Flask</li>
                <li>PostgreSQL</li>
              </ul>

              <h3 className="skill-type">Development Tools</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Docker</li>
                <li>Jest Testing</li>
              </ul>
            </div>
          </div>

          {/* Non-Technical Skills */}
          <div className="skills-category">
            <h2 className="category-title">
              Non-Technical Skills
            </h2>
            <div className="skills-list">
              <h3 className="skill-type">Communication</h3>
              <ul>
                <li>Technical Writing</li>
                <li>Public Speaking</li>
                <li>Mentoring</li>
              </ul>

              <h3 className="skill-type">Collaboration</h3>
              <ul>
                <li>Team Leadership</li>
                <li>Agile Methodologies</li>
                <li>Cross-functional Coordination</li>
              </ul>

              <h3 className="skill-type">Problem Solving</h3>
              <ul>
                <li>Critical Thinking</li>
                <li>Algorithmic Approach</li>
                <li>Debugging Strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;