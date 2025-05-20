import { Link } from "react-router-dom";
import { useTheme } from '../common/ThemeContext'
import logoLight from '../assets/sw-logo-light.svg'
import logoDark from '../assets/sw-logo-dark.svg'
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import styles from '../sections/Hero/HeroStyles.module.css';
import linkedinLight from '../assets/linkedin-light.svg';
import linkedinDark from '../assets/linkedin-dark.svg';
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import CV from '../assets/Sam-Woolson-Resume.pdf';


export function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const logo = theme === 'light' ? logoLight : logoDark;
    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    
    return(
    
        <div className={styles.navContainer}>
        <div className={styles.logoHome}>
        <Link to="/"><img src={logo}/></Link></div>
        
    
        <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/samwoolson/" target='_blank'><img src={linkedinIcon} alt="LinkedIn Icon"></img></a>
        <a href="https://www.github.com/sewoolson/" target='_blank'><img src={githubIcon} alt="github Icon"></img></a>
        </div>
        <div className={styles.resume}>
        <a href={CV} download><button className="hover btn">Resume</button></a></div>
        <div><a><img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/></a></div>
        </div>

    )
}