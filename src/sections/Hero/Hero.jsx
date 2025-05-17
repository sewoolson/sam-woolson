import styles from './HeroStyles.module.css';
import heroImg from '../../assets/samwoolson-portrait.png';


function Hero() {

  return (
    <section id="hero" className={styles.container}>
        
            <img className={styles.hero } src={heroImg} alt="Picture of Sam Woolson" />

            <div className={styles.info}>
      
                <h2>Product Designer &<br/> Frontend Developer</h2>

                <p className={styles.description}>I've combined my passion for UI Design and Front-end development to bring ideas to life. I thrive on using creative thinking and problem-solving to bridge gaps and create meaningful connections.</p>
            

                </div> 

                
    </section>
  )
}

export default Hero