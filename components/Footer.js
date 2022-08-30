import React from 'react'
import styles from "../styles/Footer.module.css"
import Facebook from "../public/images/icon-facebook.svg"
import Instagram from "../public/images/icon-instagram.svg"
import Pinterest from "../public/images/icon-pinterest.svg"
import Twitter from "../public/images/icon-twitter.svg"
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  return (
    <nav className={styles.navContainer}>
        <section className={styles.sectionOne}>
            <h1 className={styles.logo}>loopstudios</h1>
            <ul className={styles.linkContainer}>
            <li>
                <Link href="/">
                    <a className={styles.links}>About</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className={styles.links}>Careers</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className={styles.links}>Events</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className={styles.links}>Products</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className={styles.links}>Support</a>
                </Link>
            </li>
        </ul>
        </section>
        <section className={styles.sectionTwo}>
            <div className={styles.mediaContainer}>
                <Image src={Facebook} className={styles.icons} alt=""/>
                <Image src={Instagram} className={styles.icons} alt=""/>
                <Image src={Twitter} className={styles.icons} alt=""/>
                <Image src={Pinterest} className={styles.icons} alt=""/>
            </div>
            <p className={styles.rights}>©2022 loopstudios. All rights reserved.</p>
        </section>
    </nav>
  )
}
