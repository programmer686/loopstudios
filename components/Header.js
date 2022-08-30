import React from 'react'
import styles from "../styles/Header.module.css"
import Link from "next/link"
import logo from "../public/images/logo.svg"
import Image from 'next/image'
export default function Header() {
  return (
    <div className={styles.navbar}>
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
    </div>
  )
}
