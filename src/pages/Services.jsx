// src/pages/Sevices.js
import React from 'react';
import Header from '../components/Header';
import './Services.scss';
import { useTranslation } from "react-i18next";

import backgroundImage from '../assets/services_img_1.avif';
import img2 from '../assets/services_img_2.avif'
import img3 from '../assets/services_img_3.avif'



const Services = () => {

  const { t } = useTranslation();


  return (
    <div>
      <Header />
      <section className="services">
        <div className="services-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="services-content">
            <h1>"Bảo Tồn Khí Hậu Theo Chủ Nghĩa Tư Bản"</h1>
            <button>Bất kì lúc nào.</button>
          </div>
        </div>
      </section>
      <section className="hero-section-2">
        <div className="hero-section-2__image">
          <img src={img2} alt="Sustainable Future" />
        </div>
        <div className="hero-section-2__content">
          <h1 className="hero-section-2__title">{t('servicesHeader1')}</h1>
          <p className="hero-section-2__description">{t('servicesTitle1')}</p>
          <button className="hero-section__button">{t('buttonGetStarted')}</button>
        </div>

      </section>
      <section className="hero-section-2">

        <div className="hero-section-2__content">
          <h1 className="hero-section-2__title">{t('servicesHeader2')}</h1>
          <p className="hero-section-2__description">{t('servicesTitle2')}</p>
          <button className="hero-section__button">{t('buttonGetStarted')}</button>
        </div>
        <div className="hero-section-2__image">
          <img src={img3} alt="Sustainable Future" />
        </div>

      </section>
    </div>
  );
};

export default Services;
