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
    <>
      {projects.map((project) => {
        const { id, image, title, client, web_technology } = project;

        console.log(project);
        console.log(projects);

        return (
          <section key={id} className={styles.section}>
            <h1 className={styles.h1}>PORTFOLIO</h1>
            <div className={styles.div}></div>

            <div>
              <img src={image} alt={title} className={styles.img} />
            </div>
            <div className='cocktail-footer'>
              <h3>{title}</h3>
              <h4>{client}</h4>
              <p>{web_technology}</p>
              <Link to={`/portfolio/${id}`} className='btn btn-primary btn-details'>
                details
              </Link>
            </div>
          </section>
        )
      })}
    </>
  );
};




export default Portfolio