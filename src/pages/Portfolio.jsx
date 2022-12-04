import React, { useState } from 'react'
import styles from './portfolio.module.css'
import data from '../data/portfolio'
import { Link } from 'react-router-dom'

const Portfolio = () => {

  const [projects] = useState(data);

  // const data = [];
  // for (let i = 0; i < projects.length; i++) {
  //   data.push(projects[i]);
  // }
  // console.log(data);

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>PORTFOLIO</h1>
      <div className={styles.div}></div>

      <div className={styles.container}>
        {projects.map((project) => {
          const { id, image, title } = project;

          return (
            <div key={id} className={styles.image_title}>
              <div>
                <img src={image} alt={title} className={styles.img} />
              </div>
              <div>
                <h3 className={styles.h3}>{title}</h3>
                <Link to={`/portfolio/${id}`} className='btn btn-primary btn-details'>
                  details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}






export default Portfolio