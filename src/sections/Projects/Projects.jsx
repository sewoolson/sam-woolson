import styles from './ProjectsStyles.module.css';
import { useState } from 'react';
import Modal from '../../Components/Modal';
import { Link } from 'react-router-dom';

import myRush from '../../assets/MyRushApp-Mockup.jpg';
import rushMockup from '../../assets/rushmockup.jpg';
import chesMockup from '../../assets/chesapeake-mockup.jpg';
import cwMockup from '../../assets/CW-OCE-mockup.jpg';

const projectData = [
  {
    title: 'My Rush',
    type: 'Mobile App',
    image: myRush,
    modal: {
      image: myRush,
      title: 'My Rush Mobile App',
      date: 'April 2025',
      description: 'A mobile app built to streamline hospital visits and scheduling.',
      description2: 'Features include patient logins, appointment tracking, and integrated support.',
      githubLink: 'https://github.com/yourusername/myrush-app',
    },
  },
  {
    title: 'Rush Refresh',
    type: 'Responsive Web',
    image: rushMockup,
    modal: {
      image: rushMockup,
      title: 'Rush Website Refresh',
      date: 'March 2024',
      description: 'A responsive redesign of the Rush website.',
      description2: 'Improved navigation, accessibility, and performance optimizations.',
      githubLink: 'https://github.com/yourusername/rush-refresh',
    },
  },
{
title: 'Childrens Wisconsin',
type: 'Mobile Components',
image: cwMockup,
modal: {
  image: cwMockup,
  title: 'Childrens Wisconsin',
  date: '2024',
  description: '',
  description2: '',
  githubLink: '',
}
},
  {
    title: 'Chesapeake',
    type: 'Responsive Web',
    image: chesMockup,
    modal: {
      image: chesMockup,
      title: 'Chesapeake Web Components',
      date: '2024',
      description: '',
      description2: '',
      githubLink:'',

    }
  }
  // More entries...
];


function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleOpenModal = (project) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveProject(null);
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projectData.map((project, index) =>
          project.link ? (
            <Link
              to={project.link}
              target="_blank"
              key={index}
              className={styles.projectItem}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={`Mockup of ${project.title}`}
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                </div>
              </div>
            </Link>
          ) : (
            <div
              key={index}
              className={styles.projectItem}
              onClick={() => handleOpenModal(project)}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={`Mockup of ${project.title}`}
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>

  <Modal
  isOpen={isModalOpen}
  onClose={handleCloseModal}
  image={activeProject?.modal.image}
  title={activeProject?.modal.title}
  date={activeProject?.modal.date}
  description={
    <>
      <p>{activeProject?.modal.description}</p>
      <p>{activeProject?.modal.description2}</p>
    </>
  }
  githubLink={activeProject?.modal.githubLink}
/>

    </section>
  );
}

export default Projects;
