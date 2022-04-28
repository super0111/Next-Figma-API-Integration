import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from "next/router"
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import classes from './headerNav.module.css';
import { getCsrfToken, getProviders, getSession } from "next-auth/react"
import { VscGlobe } from "react-icons/vsc";
import { useSession, signOut  } from 'next-auth/react';
import CountryModal from './CountryModal';
import { Context } from "./../../../AppContext"

const sections1 = [
  { title: 'Concerts', url: '#', locale: "EN", },
  { title: 'Conciertos', url: '#', locale: "ES", },
  { title: 'Artists', url: '#', locale: "EN" },
  { title: 'Artistas', url: '#', locale: "ES" },
  { title: 'Venues', url: '#', locale: "EN" },
  { title: 'Lugares', url: '#', locale: "ES" },
];
const sections2 = [
  { title: 'Sign In', url: '/signIn', locale: "EN", },
  { title: 'Señal En', url: '/signIn"', locale: "ES", },
];

const HeaderNav = (props) => {
  const router = useRouter()
  const { countryValue, lang_value } = useContext(Context);
  const { locale } = useRouter()
  const { data: session, status } = useSession()
  const [ scroll, setScroll ] = useState(false);
  const [ modalIsShow, setModalIsShow ] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const handleSignout = () => {
    signOut()
  }

  const handleCountryModalShow = () => {
    setModalIsShow(true)
  }

  return (
    <div className={classes.HeaderNav}>
      <div className={scroll ? classes.headerToolScroll : classes.headerTool}>
        <Toolbar className={classes.left_field} component='nav' variant='dense'>
          { sections1.filter(p => p.locale === locale).map((section1, i) => (
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
          <a 
            onClick={() => {
              router.push('/', '/', { locale: locale })
            }}
            locale={locale}
          >
            <img
              className={classes.navbarLogoImg}
              src='/images/Homepage1/logo-white 1.png'
            />
          </a>
        </div>
        <div className={classes.right_field}>
          { status === "unauthenticated" ?
              <Toolbar className={classes.rightSideMenu} component='nav' variant='dense'>
                  <Link
                    style={{ textDecoration: 'none' }}
                    noWrap
                    onClick={() => {
                      router.push('/signIn', '/signIn', { locale: locale })
                    }}
                    locale={locale}
                    className={classes.navToolbarLink}
                  >
                    {lang_value["headerNav"]["signIn"][locale]}
                  </Link>
              </Toolbar> : 
              <Toolbar className={classes.rightSideMenu} component='nav' variant='dense'>
                  <Link
                    style={{ textDecoration: 'none' }}
                    noWrap
                    className={classes.navToolbarLink}
                    onClick={handleSignout}
                  >
                    {lang_value["headerNav"]["signout"][locale]}
                  </Link>
              </Toolbar>
          }
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
      <div className={ scroll ? classes.headerToolResponsiveScroll : classes.headerToolResponsive }>
        {/* <NavMenuDraw /> */}
        <div className={classes.navbarLogo}>
          <img
            className={classes.navbarLogoImg}
            src='/images/Homepage1/logo-white 1.png'
          />
        </div>
        <div className={classes.navbarSingIn}>
          {sections2.map((section2, i) => (
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
        {  status === "authenticated" ?
              <div className={classes.navbarSignInResponsive}>
                <Link
                  style={{ textDecoration: 'none' }}
                  noWrap
                  href=''
                  className={classes.navResponsiveToolbarLink}
                >
                 {lang_value["headerNav"]["signout"][locale]}
                </Link>
              </div> : status === "unauthenticated" ?
              <div className={classes.navbarSignInResponsive}>
              <Link
                style={{ textDecoration: 'none' }}
                noWrap
                href='/signIn'
                className={classes.navResponsiveToolbarLink}
              >
               {lang_value["headerNav"]["signIn"][locale]}
              </Link>
            </div> : ""
        }
      </div>
      { modalIsShow === true ?
        <CountryModal modalIsShow={modalIsShow} setModalIsShow={setModalIsShow}  /> : ""
      }
    </div>
  );
};
export default HeaderNav;