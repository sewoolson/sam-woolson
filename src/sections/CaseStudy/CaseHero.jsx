import React from 'react';
import PropTypes from 'prop-types';
import styles from '../CaseStudy/CaseHeroStyles.module.css'

const CaseHero = ({ projName, keyResult, caseHeroImg, team, role, duration }) => {
  return (
    <section className={styles.caseHero}>
      <div className={styles.container}>
        <div className={styles.titleBlock}>
          <h4>{projName}</h4>
          <h2>{keyResult}</h2>
          <img src={caseHeroImg} />
        </div>
        <div className={styles.details}>
          <div>
            <h3>Team</h3>
            <p>{team}</p>
          </div>
          <div>
            <h3>Role</h3>
            <p>{role}</p>
          </div>
          <div>
            <h3>Duration</h3>
            <p>{duration}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

CaseHero.propTypes = {
  projName: PropTypes.string.isRequired,
  keyResult: PropTypes.string.isRequired,
  caseHeroImg: PropTypes.string,
  team: PropTypes.string,
  role: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired
};

export default CaseHero;