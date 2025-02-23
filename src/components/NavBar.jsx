import React ,{  dispatch} from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import logo from '../assets/logo.png'
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from './../redux/slices/languageSlice'


const Navbar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const changeLanguage = (lng) => {
    dispatch(setLanguage(lng));
  };

  return (
    <><nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/" className="logo">
          <img src={logo} alt="CO2 Bank" />
        </NavLink>
      </div>
      <ul className="navbar__links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t('home')}
            </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t('services')}
            </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t('projects')}
            </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t('blog')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t('contact')}
          </NavLink>
        </li>
      </ul>
    </nav>
      <div className="language">
        <button onClick={() => changeLanguage('vi')} style={{ margin: '0 10px', fontWeight: language === 'vi' ? 'bold' : 'normal' }}>
          🇻🇳 Tiếng Việt
        </button>
        <button onClick={() => changeLanguage('en')} style={{ fontWeight: language === 'en' ? 'bold' : 'normal' }}>
          🇬🇧 English
        </button>
      </div></>
  );
};

export default Navbar;
