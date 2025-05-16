import styles from './ProjectsStyles.module.css';
import myRush from '../../assets/MyRushApp-Mockup.jpg';
import { Link } from 'react-router-dom';
import rushMockup from '../../assets/rushmockup.jpg'
import chesMockup from '../../assets/chesapeake-mockup.jpg'
import cwMockup from '../../assets/CW-OCE-mockup.jpg'

function Projects() {
  return (
  <section id="projects" className={styles.container}>
    <h1 className='sectionTitle'>Design Projects</h1>
    <div className={styles.projectsContainer}>
        <Link to="/myrush" target="_blank"><img className="hover" src={myRush}  alt="Mockups up of screens from Rush's mobile app"/>
        <h3>My Rush</h3>
        <p>Mobile App</p>
        </Link>
        <Link to="/rushrefresh" target="_blank"><img className="hover" src={rushMockup} alt="Mockup up of Rush's homepage"/>
        <h3>Rush Refresh</h3>
        <p>Responsive Web</p>
        </Link>
        <Link to="/cw" target="_blank"><img className="hover" src={cwMockup} alt="Mockup of Chesapeake Regional Healthcare's homepage"/>
        <h3>Chesapeake Components</h3>
        <p>Mobile App</p>
        </Link>
        <Link to="/ches" target="_blank"><img className="hover" src={chesMockup} alt="Mockup of Chesapeake Regional Healthcare's homepage"/>
        <h3>Chesapeake Components</h3>
        <p>Responsive Web</p>
        </Link>
    </div>
    <br/>
    <h1 className='sectionTitle'>Coding Projects</h1>
    <div className={styles.projectsContainer}>

    </div>
    </section>
    );
}

export default Projects