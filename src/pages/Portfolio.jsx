import React, { useState } from 'react'
import styles from './portfolio.module.css'
import data from '../data/portfolio'

const Portfolio = () => {

  const [projects] = useState(data);

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>PORTFOLIO</h1>
      <div className={styles.div}></div>

      <div className={styles.container}>
        {projects.map((project) => {
          const { id, image, title } = project;

          return (
            <div key={id} className={styles.image_title_details}>
              <div className={styles.image}>
                <img src={image} alt={title} />
              </div>
              <div className={styles.title_details}>
                <h3 className={styles.h3}>{title}</h3>
                {/* <Link to={`/singleproject/${id}`} > */}
                <button className={styles.button} >Details</button>
                {/* </Link> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Portfolio