import styles from './HeroStyles.module.css';
import heroImg from '../../assets/samwoolson-portrait.png';


function Hero() {

  return (
    <section id="hero" className={styles.container}>
        
            <img className={styles.hero } src={heroImg} alt="Picture of Sam Woolson" />

            <div className={styles.info}>
      
                <h2>Front-end Developer</h2>

                <p className={styles.description}>I've combined my experience as a UX/UI designer and a Front-end developer to bring ideas to life by reducing the friction between design and implementation. I thrive on using creative thinking and problem-solving to bridge gaps and create meaningful connections.</p>
            

                </div> 

                
    </section>
  )
}

export default Hero