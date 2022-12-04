import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from '../data/reviews';
import "../pages/reviews.css"

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
    <section className='section'>
      <h1 className='h1'>REVIEWS</h1>
      <div className='div'></div>

      <div className='container'>
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
              <img src={image} alt={name} className='img' />
              <h4 className='h4'><b>{name}</b></h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <p><small className='date'>{date}</small></p>
              <FaQuoteRight className='icon' />
            </blockquote>
          );
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Reviews;
