import React from 'react'
import styles from "../styles/Creations.module.css"
import data from "../public/data/creationData.js"
import CreationCard from './CreationCard'
export default function Creations() {
    const cards = data.map(item => {
        return <CreationCard 
        key={item.key}
        name={item.name}
        image={item.image}/>
    })

  return (
    <div>
      <h1 className={styles.ourCreations}>OUR CREATIONS</h1>
      <div className={styles.container}>
          {cards}
      </div>
    </div>
  )
}
