import React from 'react';
import ProjectSnapshot from '../sections/CaseStudy/ProjectSnapshot'


export function MyRush() {
    return (
        <>   
    <section id="caseStudy" className={styles.container}>
    <ProjectSnapshot
      name="My Rush Mobile App"
      timeline="December – April 15 Release to Market"
      upcomingReleases="June and September (WIP)"
      teamSize="20+"
      role="Independent UX/UI Contractor"
      keyResult="Strong Early Interest: Microsite-to-app store click conversion peaked at 77.8% on 4/15, indicating high initial engagement."
      challImp="Rush rebranded and relaunched their mobile app as My Rush to streamline appointment scheduling and deliver a personalized experience, moving away from a generalized, white-labeled MyChart solution."
    />
    </section>
    </>
    )
}