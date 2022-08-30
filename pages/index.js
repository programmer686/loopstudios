import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Leaders from '../components/Leaders'
import Creations from '../components/Creations'
export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.textContainer}>
          <h1 className={styles.text}>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </section>
      <section className={styles.leaderContainer}>
        <Leaders/>
      </section>
      <section className={styles.creationsContainer}>
        <Creations/>
      </section>
    </div>
  )
}
