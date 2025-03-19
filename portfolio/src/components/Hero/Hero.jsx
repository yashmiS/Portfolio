import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

function Hero() {
  return <section className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}>Hi, I'm Yashmi</h1>
    <p className={styles.description}>I'm Fullstack Developer with 2 years experince using Angular and .Net.Reach out If you like to know about more!</p>
    <a href='savindiabeywickrama@gmail.com' className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src = "/assets/hero/heroImage.png" alt='Hero image of me ' className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
}

export default Hero