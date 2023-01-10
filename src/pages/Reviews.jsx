import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from '../data/reviews';
import '../sass/reviews.scss'

const Reviews = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='sectionR'>
      <h1 className='h1R'>REVIEWS</h1>
      <div className='divR'></div>

      <div className='containerR'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote, date } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }

          return (
            <blockquote cite='testimonies' className={position} key={id}>
              {/* h4 should be cite element */}
              <img src={image} alt={name} className='imgR' />
              <h4 className='h4R'><b>{name}</b></h4>
              <p className='titleR'>{title}</p>
              <p className='textR'>{quote}</p>
              <p><small className='dateR'>{date}</small></p>
              <FaQuoteRight className='iconR' />
            </blockquote>
          );
        })}
        <button className='prevR' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='nextR' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Reviews;
