import styles from './HeroStyles.module.css';
import heroImg from '../../assets/sw-logo.svg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/Sam-Woolson-Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero } src={heroImg} alt="Sam Woolson's logo" />
            <img className={styles.colorMode}
            src={themeIcon} alt="Color mode icon"
            onClick={toggleTheme}/>
            
            </div>
            <div className={styles.info}>
                <h1>Sam Woolson</h1>
                <h2>Product Designer & Frontend Developer</h2>
                <span>
                    <a href="https://www.linkedin.com/in/samwoolson/" target='_blank'>
                    <img src={linkedinIcon} alt="LinkedIn Icon"></img></a>
                    <a href="https://www.github.com/sewoolson/" target='_blank'>
                    <img src={githubIcon} alt="github Icon"></img></a>
                </span>

                <p className={styles.description}>Passion for UI Design and Front-end development to bring ideas to life. I thrive on using creative thinking and problem-solving to bridge gaps and create meaningful connections.</p>
                <a href={CV} download>
                    <button className="hover">Resume</button>
                </a>

                </div> 

                
    </section>
  )
}

export default Hero;