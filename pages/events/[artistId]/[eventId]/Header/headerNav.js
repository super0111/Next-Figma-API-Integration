import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import NavMenuDraw from './navMenuDraw';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import classes from './headerNav.module.css';
import { BiSearch } from 'react-icons/bi';
import { VscGlobe } from "react-icons/vsc";
import { Context } from "./../../../../../components/AppContext"
import CountryModal from "./../../../../../components/home/homepage1/Header/CountryModal"

const sections1 = [
  { title: 'Concerts', url: '#', locale: "EN" },
  { title: 'Sports', url: '#', locale: "EN" },
  { title: 'Arts & Theater', url: '#', locale: "EN" },
  { title: 'Family', url: '#', locale: "EN" },
  { title: 'More', url: '#', locale: "EN" },
  { title: 'Conciertos', url: '#', locale: "ES" },
  { title: 'Deportes', url: '#', locale: "ES" },
  { title: 'Artes and Teatro', url: '#', locale: "ES" },
  { title: 'Familia', url: '#', locale: "ES" },
  { title: 'Mas', url: '#', locale: "ES" },
];
const sections2 = [
  { title: 'Sign In', url: '#', locale: "EN" },
  { title: 'Sell', url: '#', locale: "EN" },
  { title: 'Git Cards', url: '#', locale: "EN" },
  { title: 'Help', url: '#', locale: "EN" },
  { title: 'Señal En', url: '#', locale: "ES" },
  { title: 'Vender', url: '#', locale: "ES" },
  { title: 'Tarjetas Git', url: '#', locale: "ES" },
  { title: 'Ayudar', url: '#', locale: "ES" },
];

const HeaderNav = (props) => {
  const { specialBg } = props
  const { locale } = useRouter()
  const { countryValue, lang_value } = useContext(Context);
  const [scroll, setScroll] = useState(false);
  const [ modalIsShow, setModalIsShow ] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const handleCountryModalShow = () => {
    setModalIsShow(true)
  }

  return (
    <div className={classes.hearderNav}>
      <div className={scroll ? classes.headerToolScroll : classes.headerTool}>
        <Toolbar component='nav' variant='dense'>
          {sections1.filter(p => p.locale === locale).map((section1, i) => (
            <Link
              style={{ textDecoration: 'none' }}
              noWrap
              key={i}
              href={section1.url}
              className={classes.navToolbarLink}
            >
              {section1.title}
            </Link>
          ))}
        </Toolbar>
        <div className={classes.navbarLogo}>
          <a href='/'>
            <img
              className={classes.navbarLogoImg}
              src='/images/Homepage1/logo-white 1.png'
            />
          </a>
        </div>
        <div className={classes.rightSideMenu}>
          <Toolbar component='nav' variant='dense'>
            {sections2.filter(p => p.locale === locale).map((section2, i) => (
              <Link
                style={{ textDecoration: 'none' }}
                noWrap
                key={i}
                href={section2.url}
                className={classes.navToolbarLink}
              >
                {section2.title}
              </Link>
            ))}
          </Toolbar>
          <div className={classes.border_right}></div>
          { countryValue === "US" ? 
            <img src='/images/flags/USA_Flag.png' className={classes.flag_img} onClick={handleCountryModalShow}/> : countryValue === "MX" ?
            <img src='/images/flags/Mexico_flag.png' className={classes.flag_img} onClick={handleCountryModalShow} /> :
            <div className={classes.countrySelect} onClick={handleCountryModalShow}>
              <VscGlobe size={20} color="white" />
            </div>
          }
        </div>
      </div>
      <div
        className={
          scroll
            ? classes.headerToolResponsiveScroll
            : classes.headerToolResponsive
        }
      >
        <NavMenuDraw />
        <div className={classes.navbarLogo}>
          <img
            className={classes.navbarLogoImg}
            src='/images/Homepage1/logo-white 1.png'
          />
        </div>
        <div className={classes.navbarSingIn}>
          {sections2.filter(p => p.locale === locale).map((section2, i) => (
            <Link
              style={{ textDecoration: 'none' }}
              noWrap
              key={i}
              href={section2.url}
              className={classes.navResponsiveToolbarLink}
            >
              {section2.title}
            </Link>
          ))}
        </div>
        <div className={classes.navbarSignInResponsive}>
          <Link
            style={{ textDecoration: 'none' }}
            noWrap
            href=''
            className={classes.navResponsiveToolbarLink}
          >
            {lang_value["headerNav"]["signIn"][locale]}
          </Link>
        </div>
      </div>
      { modalIsShow === true ?
        <CountryModal modalIsShow={modalIsShow} setModalIsShow={setModalIsShow}  /> : ""
      }
    </div>
  );
};
export default HeaderNav;
