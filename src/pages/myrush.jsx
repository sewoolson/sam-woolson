import { Link } from "react-router-dom"
import myRush from '../assets/MyRushApp-Mockup.jpg'
import styles from './PagesStyles.module.css';
import CaseHeroSection from "../Components/CaseHeroSection";

export function MyRush() {
    return (
        <>   
    <section id="caseStudy" className={styles.container}>
        <div id="deets" className="projectDetails">
            <h1>My Rush Mobile App</h1><br/>
        <CaseHeroSection/>      
</div>
    </section>
    </>
    )
}