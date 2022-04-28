import { useEffect, useState, useContext } from 'react';
import { useRouter } from "next/router"
import classes from './headerBody.module.css';
import { BiSearch } from 'react-icons/bi';
import PlaceOutlined from '@material-ui/icons/PlaceOutlined';
import { Context } from "./../../AppContext";

const HeaderBody = (props) => {
  const router = useRouter()
  const { locale } = useRouter()
  const { events } = props;
  const [rotating, setRotating] = useState(true)
  const [state, setState] = useState(0);
  const [event, setEvent] = useState(events[0]);
  const { countryValue, setCountryValue } = useContext(Context);

  useEffect(() => {
    if (!rotating) return;
    const timer = setTimeout(() => {
      setState(state === 2 ? 0 : state + 1);
    }, 5000);
    return () => clearTimeout(timer)
  }, [rotating, state]);

  useEffect(() => {
    setEvent(events[state]);
  }, [state]);

  const selectFeaturedEvent = (ev) => {
    setRotating(false);
    setState(ev);
  }

  return (
    <div className={classes.headerBody}>
      {event ? (
        <a 
          onClick={() => {
            router.push(`/events/${event.artist.id}/${event.id}`, `/events/${event.artist.id}/${event.id}`, { locale: locale })
          }}
          locale={locale}
        >
          <div className={classes.headerBodyBar}>
            <img className={classes.headerBodyImg} src={event.bigImage} />
            <div className={classes.headerTextField}>
              <h1 className={classes.headerTitle}>{event.title}</h1>
              <h2 className={classes.headerText}>{event.text}</h2>
              <button className={classes.headerBtn}>{ locale === "EN" ? "See Tickets" : locale === "ES" ? "Ver entradas" : "" }</button>
            </div>
          </div>
        </a>
      ) : null}

      <div className={classes.headerSlider}>
        <span
          onClick={() => selectFeaturedEvent(0)}
          className={
            state === 0 ? classes.sliderItemActive : classes.sliderItem
          }
        >
          01
        </span>
        <img className={classes.headerSliderImg} src='/images/Line 1.png' />
        <span
          onClick={() => selectFeaturedEvent(1)}
          className={
            state === 1 ? classes.sliderItemActive : classes.sliderItem
          }
        >
          02
        </span>
        <img className={classes.headerSliderImg} src='/images/Line 1.png' />
        <span
          onClick={() => selectFeaturedEvent(2)}
          className={
            state === 2 ? classes.sliderItemActive : classes.sliderItem
          }
        >
          03
        </span>
      </div>
      <div className={classes.headerFooter}>
        <h3 className={classes.headerFooterTitle}>
          { locale === "EN" ? "Let's Make Live Happen" : locale === "ES" ? "Hagamos que la vida suceda" : "" }
        </h3>
        <span className={classes.headerFooterText}>
          { locale === "EN" ? "Shop millions of live events and discover can't-miss concerts, games, theater and more." 
          : locale === "ES" ? "Compre millones de eventos en vivo y descubra conciertos, juegos, teatro y más que no se puede perder." : "" }
        </span>
        <div className={classes.headerToolBar}>
          <div className={classes.cityInputField}>
            <input
              className={classes.cityInput}
              type='text'
              placeholder='City or Zip Code'
            />
            <PlaceOutlined style={{color: "#DAA49A"}}/>
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className={classes.borderVertical}></div>
          <div className={classes.selectField}>
            <select className={classes.select}>
              <option className={classes.option} value='0'>{locale === "EN" ? "All Dates" : locale === "ES" ? "Todas fechas" : ""}</option>
              <option className={classes.option} value='1'>{locale === "EN" ? "This Weekend" : locale === "ES" ? "Este fin de semana" : ""}</option>
              <option className={classes.option} value='2'>{locale === "EN" ? "Date Range" : locale === "ES" ? "Rango de fechas" : ""}</option>
            </select>
          </div>
          <div className={classes.borderVertical}></div>
          <div className={classes.searchBarField}>
            <div className={classes.searchBar}>
              <BiSearch color='#8a8989' size={18} />
              { locale === "EN" ? 
                <input
                  className={classes.searchBarInput}
                  type='text'
                  placeholder='Search for artists, venues and events'
                /> :
                locale === "ES" ? 
                <input
                  className={classes.searchBarInput}
                  type='text'
                  placeholder='Busqueda de artistas, lugares y eventos'
                /> : ""
              }
            </div>
            <div className={classes.searchBtn}>{locale === "EN" ? "Search" : locale === "ES" ? "Busqueda" : ""}</div>
          </div>
        </div>

        <div className={classes.responsiveHeaderToolBar}>
          <div className={classes.cityTool}>
            <div className={classes.cityInputField}>
              <input
                className={classes.cityInput1}
                type='text'
                placeholder='City or Zip Code'
              />
              <img
                className={classes.cityInputIcon}
                src='/images/Homepage1/city-location.png'
              />
            </div>
            <div className={classes.selectField}>
              <select className={classes.select}>
                <option style={{ color: 'blue' }} value='0'>
                  {locale === "EN" ? "All Dates" : locale === "ES" ? "Todas fechas" : ""}
                </option>
                <option value='1'>{locale === "EN" ? "Date1" : locale === "ES" ? "Fecha1" : ""}</option>
                <option value='2'>{locale === "EN" ? "Date2" : locale === "ES" ? "Fecha2" : ""}</option>
                <option value='3'>{locale === "EN" ? "Date3" : locale === "ES" ? "Fecha3" : ""}</option>
              </select>
            </div>
          </div>
          <div className={classes.searchTool}>
            <div className={classes.responsiveSearchBar}>
              <div className={classes.searchBar}>
                <BiSearch color='#8a8989' size={18} />
                { locale === "EN" ? 
                  <input
                    className={classes.searchBarInput}
                    type='text'
                    placeholder='Search for artists, venues and events'
                  /> :
                  locale === "ES" ? 
                  <input
                    className={classes.searchBarInput}
                    type='text'
                    placeholder='Busqueda de artistas, lugares y eventos'
                  /> : ""
                }
              </div>
              <div className={classes.searchBtn}>{locale === "EN" ? "Search" : locale === "ES" ? "Búsqueda" : ""}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBody;
