import React from 'react'
import styles from "../styles/Creations.module.css"
export default function CreationCard(props) {
  console.log(props)
  
    return (
    <div className={styles.cardContainer} style={{
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: "no-repeat",
        height: "70vh",
        }}>
        <h1 className={styles.text}>
            {props.name}
        </h1>
    </div>
  )
}
