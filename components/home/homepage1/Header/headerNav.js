import React, { useState, useEffect } from 'react';
import NavMenuDraw from './navMenuDraw';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import classes from './headerNav.module.css';
import { getCsrfToken, getProviders,getSession } from "next-auth/react"
import { useSession } from 'next-auth/react';


const sections1 = [
  { title: 'Concerts', url: '#' },
  { title: 'Artists', url: '#' },
  { title: 'Venues', url: '#' },
];
const sections2 = [{ title: 'Sign In', url: '/signIn' }];

const HeaderNav = (props) => {
  console.log("props.session",props.session);
  const { data: session, status } = useSession()
  console.log("header session, status",session, status)
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const handleSignout = () => {

  }

  return (
    <>
      <div className={scroll ? classes.headerToolScroll : classes.headerTool}>
        <Toolbar component='nav' variant='dense'>
          {sections1.map((section1) => (
            <Link
              style={{ textDecoration: 'none' }}
              noWrap
              key={section1.title}
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
        { status === "unauthenticated" ?
          <div className={classes.rightSideMenux}>
            <Toolbar className={classes.rightSideMenu} component='nav' variant='dense'>
                <Link
                  style={{ textDecoration: 'none' }}
                  noWrap
                  href="/signIn"
                  className={classes.navToolbarLink}
                >
                  SignIn
                </Link>
            </Toolbar>
          </div> : 
          <div className={classes.rightSideMenux}>
            <Toolbar className={classes.rightSideMenu} component='nav' variant='dense'>
                <Link
                  style={{ textDecoration: 'none' }}
                  noWrap
                  className={classes.navToolbarLink}
                  onClick={handleSignout}
                >
                  Signout
                </Link>
            </Toolbar>
          </div>
        }
      
      </div>
      <div
        className={
          scroll
            ? classes.headerToolResponsiveScroll
            : classes.headerToolResponsive
        }
      >
        {/* <NavMenuDraw /> */}
        <div className={classes.navbarLogo}>
          <img
            className={classes.navbarLogoImg}
            src='/images/Homepage1/logo-white 1.png'
          />
        </div>
        <div className={classes.navbarSingIn}>
          {sections2.map((section2) => (
            <Link
              style={{ textDecoration: 'none' }}
              noWrap
              key={section2.title}
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
                  Signout
                </Link>
              </div> : status === "unauthenticated" ?
              <div className={classes.navbarSignInResponsive}>
              <Link
                style={{ textDecoration: 'none' }}
                noWrap
                href='/signIn'
                className={classes.navResponsiveToolbarLink}
              >
                SignIn
              </Link>
            </div> : ""
        }

      </div>
    </>
  );
};
export default HeaderNav;

// export async function getServerSideProps(context) {
//   const { req } = context;
//   const session = await getSession({ req })
//   console.log("serverside session", session)
//   if (session) {
//       return {
//           redirect: { destination: "/" }
//       }
//   }
//   if (!session) {
//       return {
//           redirect: { destination: "/sinIn" }
//       }
//   }
//   const csrfToken = await getCsrfToken(context)
//   const providers = await getProviders()
// console.log('csrfToken', csrfToken)
//   return {
//       props: { csrfToken, providers },
//   }
// }

export async function getServerSideProps(context) {
  console.log("context ----", context)
  return {
    props: {
      session: await getSession(context),
    },
  };
}