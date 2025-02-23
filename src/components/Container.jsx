// src/components/Hero.js
// import React from 'react';
import './Container.scss';
import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import background from '../assets/background.png';
import img2 from '../assets/V.1.0-Website-Banner.png'
import colImg1 from '../assets/End-to-End-Solution.png';
import colImg2 from '../assets/Real-Time-Project-Monitoring.png'
import colImg3 from '../assets/High-Rating-Carbon-Credit.png';
import caro1 from '../assets/caro1.png';
import caro2 from '../assets/caro2.png';
import caro3 from '../assets/caro3.png';
import caro4 from '../assets/caro4.png';
import caro5 from '../assets/caro5.png';
import caro6 from '../assets/caro6.png';
import maps from '../assets/maps.png';

import carosel1 from '../assets/carosel1.png';
import carosel2 from '../assets/carosel2.png';
import carosel3 from '../assets/carosel3.png';
import carosel4 from '../assets/carosel4.png';
import carosel5 from '../assets/carosel5.png';
import carosel6 from '../assets/carosel6.png';
import carosel7 from '../assets/carosel7.png';
import carosel8 from '../assets/carosel8.png';

const Container = () => {

  const { t } = useTranslation();

  const items = [
    {
      image: colImg1,
      title: t('title3'),
      description: t('desc3'),
    },
    {
      image: colImg2,
      title: t('title4'),
      description:t('desc4'),
    },
    {
      image: colImg3,
      title: t('title4'),
      description: t('desc5'),
    },
  ];


  const logos = [caro1, caro2, caro3, caro4, caro5, caro6];
  const logos2 = [carosel1, carosel2, carosel3, carosel4, carosel5, carosel6, carosel7, carosel8];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);

  // Auto slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [logos.length]);

    // Auto slide logic
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex1((prevIndex) =>
          prevIndex === logos2.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [logos2.length]);


  const stats = [
    { value: "100+", label: t('text1') },
    { value: "50+", label: t('text2') },
    { value: "13", label: t('text3') },
    { value: "3", label: t('text4') },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="hero-section__content">

          <h1 className="hero-section__title">{t('header1')}</h1>
          <p className="hero-section__description">{t('title1')}</p>
          <button className="hero-section__button">{t('buttonReadMore')}</button>
        </div>
        <div className="hero-section__image">
          <img src={background} alt="Sustainable Future" />
        </div>
      </section>
      <section className="hero-section-2">
        <div className="hero-section-2__content">
          <h1 className="hero-section-2__title">{t('header2')}</h1>
          <p className="hero-section-2__description">{t('title2')}</p>
          <button className="hero-section__button">{t('buttonGetStarted')}</button>
        </div>
        <div className="hero-section-2__image">
          <img src={img2} alt="Sustainable Future" />
        </div>
      </section>
      <section className="collection-section">
      </section>
      <section className="why-partner">
        <h2 className="why-partner__title">{t('header3')}</h2>
        <div className="why-partner__grid">
          {items.map((item, index) => (
            <div key={index} className="why-partner__item">
              <img
                src={item.image}
                alt={item.title}
                className="why-partner__image"
              />
              <h3 className="why-partner__subtitle">{item.title}</h3>
              <p className="why-partner__description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="client-carousel">
      <h2 className="client-carousel__title">{t('header4')}</h2>
      <div className="client-carousel__slider">
        <div
          className="client-carousel__track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {logos.map((logo, index) => (
            <div className="client-carousel__item" key={index}>
              <img src={logo} alt={`Client Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="client-carousel__dots">
      {logos.map((_, index) => (
          <span
            key={index}
            className={`client-carousel__dot ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      </section>
      
      <section className="stats-section">
        <h2 className="stats-section__title">{t('header5')}</h2>
        <div className="stats-section__grid">
          {stats.map((stat, index) => (
            <div key={index} className="stats-section__item">
              <h3 className="stats-section__value">{stat.value}</h3>
              <p className="stats-section__label">{stat.label}</p>
              {stat.sublabel && <p className="stats-section__sublabel">{stat.sublabel}</p>}
            </div>
          ))}
        </div>
        <div className="hero-section__image">
          <img src={maps} alt="Sustainable Future" />
          <ul class="elementor-icon-list-items">
            <li class="elementor-icon-list-item">
              <span class="elementor-icon-list-icon">
                <svg aria-hidden="true" class="e-font-icon-svg e-fas-map-marker-alt" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>						</span>
              <span class="elementor-icon-list-text">{t('text5')}</span>
            </li>
            <li class="elementor-icon-list-item">
              <span class="elementor-icon-list-icon">
                <svg aria-hidden="true" class="e-font-icon-svg e-fas-map-marker-alt" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" fill="red"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>        </span>
              <span class="elementor-icon-list-text">{t('text6')}</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="client-carousel">
      <h2 className="client-carousel__title">{t('header6')}</h2>
      <div className="client-carousel__slider">
        <div
          className="client-carousel__track"
          style={{
            transform: `translateX(-${currentIndex1 * 100}%)`,
          }}
        >
          {logos2.map((logo, index) => (
            <div className="client-carousel__item" key={index}>
              <img src={logo} alt={`Client Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="client-carousel__dots">
      {logos2.map((_, index) => (
          <span
            key={index}
            className={`client-carousel__dot ${
              currentIndex1 === index ? "active" : ""
            }`}
            onClick={() => setCurrentIndex1(index)}
          ></span>
        ))}
      </div>
      </section>

      <section className="hero-section" style={{height: '300px', margin: 0}}>
        <div className="hero-section__content" style={{display: "flex", justifyContent: 'center', left: '50%', flexDirection: 'column', maxWidth: 'max-content', transform: 'translate(-50%)'}}>
          <h1 className="hero-section__title" style={{color: 'black'}}>{t('header7')}</h1>
          <p className="hero-section__description" style={{color: 'black'}}>
          {t('title6')}
          </p>
          <button className="hero-section__button" style={{width: 'max-content', alignSelf: 'center'}}>{t('buttonContactUs')}</button>
        </div>
        {/* <div className="hero-section__image">
          <img src={lastImg} alt="Sustainable Future" />
        </div> */}
      </section>
    </>
  );
};

export default Container;
