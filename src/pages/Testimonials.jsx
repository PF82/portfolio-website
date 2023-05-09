import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from '../data/testimonials';
import '../sass/testimonials.scss'

const Testimonials = () => {
  const [people] = useState(data);
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
    <section className='sectionT'>
      <h1 className='h1T'>TESTIMONIALS</h1>
      <div className='divT'></div>

      <div className='containerT'>
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
              <img src={image} alt={name} className='imgT' />
              <h4 className='h4T'><b>{name}</b></h4>
              <p className='titleT'>{title}</p>
              <p className='textT'>{quote}</p>
              <p><small className='dateT'>{date}</small></p>
              <FaQuoteRight className='iconT' />
            </blockquote>
          );
        })}
        <button className='prevT' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='nextT' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Testimonials;
