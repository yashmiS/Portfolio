import React from 'react'
import styles from './About.module.css'


function About() {
  return (
    <section className={styles.container} id='about'>
        <h2 className={title}>About</h2>
        <div className={styles.content}>
          <img src='assets/about/aboutImage.png' alt='Me sitting with a laptop'
          className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutImage}>
                <img src='assets/about/cursorIcon.png' alt='Cursor'/>
                <div className={styles.aboutItemText}>
                  <h3>Frontend Developer</h3>
                  <p>I'm a frontend developer with experience in building responsive and optimized sites.</p>
                </div>
            </li>
            <li className={styles.aboutImage}>
                <img src='assets/about/serverIcon.png' alt='Server'/>
                <div className={styles.aboutItemText}>
                  <h3>Backend Developer</h3>
                  <p>I have experience developing fast abd optimised back-end systems and APIs.</p>
                </div>
            </li>
            <li className={styles.aboutImage}>
                <img src='assets/about/uiIcon.png' alt='UI'/>
                <div className={styles.aboutItemText}>
                  <h3>UI Designer</h3>
                  <p>I have desinged multiple landing pages and have systems as well.</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default About