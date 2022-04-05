import { useEffect, useState } from 'react';
import classes from './headerBody.module.css';
import { BiSearch } from 'react-icons/bi';
import PlaceOutlined from '@material-ui/icons/PlaceOutlined';

const HeaderBody = (props) => {
  const { events } = props;
  const [rotating, setRotating] = useState(true)
  const [state, setState] = useState(0);
  const [event, setEvent] = useState(events[0]);

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
        <a href={`/events/${event.artist.id}/${event.id}`}>
          <div className={classes.headerBodyBar}>
            <img className={classes.headerBodyImg} src={event.bigImage} />
            {/* <Image src={event.bigImage} height={} */}
            <div className={classes.headerTextField}>
              <h1 className={classes.headerTitle}>{event.title}</h1>
              <h2 className={classes.headerText}>{event.text}</h2>
              <button className={classes.headerBtn}>See Tickets</button>
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
          Let&apos;s Make Live Happen
        </h3>
        <span className={classes.headerFooterText}>
          Shop millions of live events and discover can&apos;t-miss concerts,
          games, theater and more.
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
              <option className={classes.option} value='0'>All Dates</option>
              <option className={classes.option} value='1'>This Weekend</option>
              <option className={classes.option} value='2'>Date Range</option>
            </select>
          </div>
          <div className={classes.borderVertical}></div>
          <div className={classes.searchBarField}>
            <div className={classes.searchBar}>
              <BiSearch color='#8a8989' size={18} />
              <input
                className={classes.searchBarInput}
                type='text'
                placeholder='Search for artists, venues and events'
              />
            </div>
            <div className={classes.searchBtn}>Search</div>
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
                  All Dates
                </option>
                <option value='1'>Date1</option>
                <option value='2'>Date2</option>
                <option value='3'>Date3</option>
              </select>
            </div>
          </div>
          <div className={classes.searchTool}>
            <div className={classes.responsiveSearchBar}>
              <div className={classes.searchBar}>
                <BiSearch color='#8a8989' size={18} />
                <input
                  className={classes.searchBarInput}
                  type='text'
                  placeholder='Search for artists, venues and events'
                />
              </div>
              <div className={classes.searchBtn}>Search</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBody;
