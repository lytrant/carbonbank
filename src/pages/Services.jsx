// src/pages/Sevices.js
import React from 'react';
import Header from '../components/Header';
import './Services.scss';
import { useTranslation } from "react-i18next";

import AssetList from "../components/AssetList";

import backgroundImage from '../assets/services_img_1.avif';
import img2 from '../assets/services_img_2.avif'
import img3 from '../assets/services_img_3.avif'
import imageVi from '../assets/imageVi.avif'
import imageEn from '../assets/imageEn.png'

const Services = () => {

  const { t, i18n } = useTranslation();
  const isVietnamese = i18n.language === "vi";

  return (
    <div>
      <Header />
      <section className="services">
        <div className="services-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="services-content">
            <h1>{t('servicesPageHeader')}</h1>
            <button>{t('servicesPageDesc')}</button>
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
      <section className="services-section-4">
        <div className="section-4" style={{ backgroundColor: `#f5f5f5` }}>
          <div className="services-content">
            <h1 className='service-content-header'>{t('servicesHeader3')}</h1>
            <AssetList />
          </div>
        </div>
      </section>
      <section className="services-section-4">
        <div className="section-4">
          <div className="services-content">
            <h1 className='service-content-header'>{t('servicesHeader4')}</h1>
            <img src={isVietnamese ? imageVi : imageEn} alt='flow' />
            </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
