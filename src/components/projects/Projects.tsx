import React from 'react';
import './Projects.css';

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  title: string;
  description: string;
  href: string;
  images: ProjectImage[];
  alt?: string;
}

const Projects: React.FC = () => {
  const projectList: Project[] = [
    {
      title: "Portfolio Website",
      description: "A Portfolio website. Click to view",
      href: 'https://markg.dev/',
      images: [
        {
          src: "./ProjectImages/porf.png",
          alt: "Portfolio Top Screenshot",
        },
        {
          src: "./ProjectImages/porf2.png",
          alt: "Portfolio About Me Screenshot",
        },
        {
          src: "./ProjectImages/porf3.png",
          alt: "Portfolio Projects Screenshot",
        }
      ]
    },
    {
      title: "Marktris",
      description: "A Tetris clone made in godot. It includes many in-game features to make the game as faithful to modern tetris as possible. This includes 7-bag, wall-kicks, the Super Rotation System, and will soon include more. Web Deployment!",
      alt: "Tetris Clone Project",
      href: 'https://marktris.markg.dev/',
      images: [
        {
          src: "./ProjectImages/TitleScreen.png",
          alt: "Tetris Title Screen Screenshot",
        },
        {
          src: "./ProjectImages/marktrisscreenshot2.png",
          alt: "Tetris Project Screenshot",
        }
      ]
    },
    {
      title: "NeonChat",
      description: "Submission for Fullyhacks 2024. Neonchat is a Bluetooth-based direct messaging chatbox that allows seamless communication between devices.",
      alt: 'Fullyhacks24 Submission',
      href: 'https://jowen-ster.github.io/FULLYHACKS_NEONCHAT/',
      images: [
        {
          src: "./ProjectImages/neonchat1.png",
          alt: "NeonChat Home Screen",
        },
        {
          src: "./ProjectImages/neonchat2.png",
          alt: "NeonChat Message Screen",
        }
      ]
    },
    {
      title: "DoodleJump ACM Workshop",
      description: 'As part of a beginner-friendly Unity workshop I led, I developed a 2D platformer game inspired by Doodle Jump to teach the fundamentals of game development using Unity and C#.',
      alt: 'Doodle Jump Clone – Unity Workshop',
      href: 'https://github.com/MarkRyanGarcia/Doodle-Jump-Gamedev-SP25',
      images: [
        {
          src: "./ProjectImages/doodlejump1.png",
          alt: "Doodlejump Presentation Cover Slide Screenshot",
        },
        {
          src: "./ProjectImages/doodlejump2.png",
          alt: "DoodleJump Unity Screenshot",
        }
      ]
    },
    {
      title: "Marktris React",
      description: "Remake of Marktris Godot export in react because it was very slow. Made during downtime while organizing FullyHacks 2025 (severely vibecoded)",
      alt: 'Marktris in React',
      href: 'https://marktris-react.markg.dev/',
      images: [
        {
          src: "./ProjectImages/marktrisreact1.png",
          alt: "Marktris empty board screenshot",
        },
        {
          src: "./ProjectImages/marktrisreact2.png",
          alt: "Marktris Gameplay Screenshot",
        }
      ]
    },
  ];

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-main-title">
            My <span className="projects-highlight">Projects</span>
          </h2>
          <p className="projects-tagline">
            A collection of my recent work and personal projects
          </p>
        </div>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div 
              key={index}
              className="project-card"
              onClick={() => handleProjectClick(project.href)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleProjectClick(project.href)}
            >
              <h3 className="project-title">
                {project.title}
              </h3>
              <p className="project-description">
                {project.description}
              </p>
              
              {project.images.length > 0 && (
                <div className="project-images">
                  {project.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image.src}
                      alt={image.alt}
                      title={image.alt}
                      loading="lazy"
                      className="project-image"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;