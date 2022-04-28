import { FaListUl, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import classes from './eventsAllConcerts.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useContext } from "react";
import {Context} from "./../../../../components/AppContext";

const EventsAllConcerts = (props) => {
    const {eventDates} = props
    const router = useRouter()
    const { locale } = useRouter()
    const { lang_value } = useContext(Context)
    return (
        <div className={classes.eventsBody}>
            <div className={classes.concertsHeader}>
                <div className={classes.concertsTitle}>
                    <h4 className={classes.concertsTitleH4}>{lang_value["eventsHome"]["noConcerts"][locale]}</h4>
                    <span className={classes.concertsTitleSpan}>{lang_value["eventsHome"]["selectCity"][locale]}</span>
                </div>
                <div className={classes.dFlex}>
                    <div>
                        <select className={classes.select}>
                            <option value="0">{lang_value["eventsHome"]["selectDates"][locale]}</option>
                            <option value="1">{lang_value["eventsHome"]["date"][locale]}1</option>
                            <option value="2">{lang_value["eventsHome"]["date"][locale]}2</option>
                            <option value="3">{lang_value["eventsHome"]["date"][locale]}3</option>
                        </select>
                    </div>
                    <div className={classes.rightBar}>
                        <div className={classes.listings}>
                            <FaListUl color="white"/>
                            <span className={classes.listingsText}>{lang_value["eventsHome"]["listings"][locale]}</span>
                        </div>
                        <div className={classes.calendar}>
                            <FaCalendarAlt />
                            <span className={classes.calendarText}>{lang_value["eventsHome"]["calendar"][locale]}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.allConcertsbody}>
                <h5 className={classes.allConcertsTitle}>{lang_value["eventsHome"]["allConcerts"][locale]}</h5>
                <div>
                    { eventDates.map((eventDate, i) => (
                        <div key={i} className={classes.concertsItem}>
                            <div className={classes.titleField}>
                                <FaChevronDown color="#545454" size={10}/>
                                <div className={classes.ml1}>
                                    <h6 className={classes.concertTitle}>{eventDate.date}</h6>
                                </div>
                            </div>
                            <div className={classes.city}>
                                <h6 className={classes.concertText}>{eventDate.city}</h6>
                                <span className={classes.concertComment}>{eventDate.venue}</span>
                            </div>
                            <div className={classes.seeTickets}>
                                <a
                                    style={{
                                        border: "none",
                                        textAlign: "center",
                                        width: 90,
                                        padding: "4px 5px",
                                        borderRadius: 3,
                                        outline: 'none',
                                        background: "#DAA49A",
                                        color: "white",
                                        fontSize: "12px",
                                        textDecoration: "none",
                                    }}
                                    onClick={() => {
                                        router.push(`/events/${eventDate.artistId}/${eventDate.eventId}/${eventDate.date}`, `/events/${eventDate.artistId}/${eventDate.eventId}/${eventDate.date}`, { locale: locale })
                                      }}
                                    locale={locale}
                                    // href={`/events/${eventDate.artistId}/${eventDate.eventId}/${eventDate.date}`}
                                >
                                    {lang_value["eventsHome"]["seeTickets"][locale]}
                                </a>
                            </div>
                        </div>
                    )) }
                </div>
                <div className={classes.loadMore}>
                    { eventDates.length > 10 ? <button className={classes.loadMoreBtn}>{lang_value["eventsHome"]["loadMore"][locale]}</button> : "" }
                </div>
            </div>
        </div>
    );
  };
  
  export default EventsAllConcerts;