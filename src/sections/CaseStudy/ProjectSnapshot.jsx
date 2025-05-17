import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectSnapshotstyles.module.css'


const ProjectSnapshot = ({
  name,
  timeline,
  upcomingReleases,
  teamSize,
  role,
  keyResult,
  challImp
}) => {
  return (
    <section className="project-snapshot">
    <div className={styles.container}>
      <ul>
        <li><h2>{name}</h2></li>
        <li><h1>{keyResult}</h1></li>
        <li><img src=""></img></li>
        <li><strong>Timeline</strong><br/> {timeline}</li>
        <li><strong>Upcoming Releases:</strong> {upcomingReleases}</li>
        <li><strong>Team</strong><br/> {teamSize}</li>
        <li><strong>My Role:</strong> {role}</li>
        <li><strong>Key Result:</strong> {keyResult}</li>
        <li><strong>Challenge & Impact</strong>{challImp}</li>
      </ul>
      </div>
    </section>
  );
};

ProjectSnapshot.propTypes = {
  name: PropTypes.string.isRequired,
  timeline: PropTypes.string.isRequired,
  upcomingReleases: PropTypes.string.isRequired,
  teamSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  role: PropTypes.string.isRequired,
  keyResult: PropTypes.string.isRequired
};

export default ProjectSnapshot;
