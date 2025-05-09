import React from 'react';
import './Projects.css';

interface ProjectImage {
  src: string;
  alt: string;
  width: string;
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
          width: "400px",
        },
        {
          src: "./ProjectImages/porf2.png",
          alt: "Portfolio About Me Screenshot",
          width: "400px",
        },
        {
          src: "./ProjectImages/porf3.png",
          alt: "Portfolio Projects Screenshot",
          width: "400px",
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
            width: "400px",
            },
            {
            src: "./ProjectImages/marktrisscreenshot2.png",
            alt: "Tetris Project Screenshot",
            width: "400px",
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
            width: "330px",
            },
            {
            src: "./ProjectImages/neonchat2.png",
            alt: "NeonChat Message Screen",
            width: "300px",
            }
        ]
    },
    {
        title: "DoodleJump ACM Workshop",
        description: 'As part of a beginner-friendly Unity workshop I led, I developed a 2D platformer game inspired by Doodle Jump to teach the fundamentals of game development using Unity and C#. Participants learned hands-on by building the game from scratch, covering key concepts such as: Player movement and physics with Rigidbody2D, Collision handling using OnTriggerEnter2D, Procedural platform spawning and cleanup, Camera tracking and infinite background scrolling, Basic UI design and a real-time score system',
        alt: 'Doodle Jump Clone – Unity Workshop',
        href: 'https://github.com/MarkRyanGarcia/Doodle-Jump-Gamedev-SP25',
        images: [
            {
            src: "./ProjectImages/doodlejump1.png",
            alt: "Doodlejump Presentation Cover Slide Screenshot",
            width: "320px",
            },
            {
            src: "./ProjectImages/doodlejump2.png",
            alt: "DoodleJump Unity Screenshot",
            width: "320px",
            }
        ]
    },
    {
        title: "Marktris React",
        description: "Remake of Marktris Godot export in react because it is was very slow. Still WIP",
        alt: 'Marktris in React',
        href: 'https://marktris-react.markg.dev/',
        images: [
            {
            src: "./ProjectImages/marktrisreact1.png",
            alt: "Marktris empty board screenshot",
            width: "420px",
            },
            {
            src: "./ProjectImages/marktrisreact2.png",
            alt: "Marktris Gameplay Screenshot",
            width: "420px",
            }
        ]
    },
  ];

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  const renderDescriptionWithLinks = (description: string) => {
    return description.replace(
      'HERE', 
      `<a href="${description.match(/https?:\/\/[^\s]+/) || '#'}" target="_blank" rel="noopener noreferrer">HERE</a>`
    );
  };

  return (
    <section id="projects">
        <div className="projects-container">
        <h1 className="projects-title">
            Projects
        </h1>
        <p className="about-tagline">A list of projects that I may or may not still be working on</p>

        <div className="project-container">
            {projectList.map((project, index) => (
            <div 
                key={index}
                className="project"
                onClick={() => handleProjectClick(project.href)}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleProjectClick(project.href)}
            >
                <h3 className="project-title">
                {project.title}
                </h3>
                <p 
                className="project-description"
                dangerouslySetInnerHTML={{ __html: renderDescriptionWithLinks(project.description) }}
                />
                
                {project.images.length > 0 && (
                <div className="project-images">
                    {project.images.map((image, imgIndex) => (
                    <img
                        key={imgIndex}
                        src={image.src}
                        alt={image.alt}
                        title={image.alt}
                        style={{ width: image.width }}
                        loading="lazy"
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