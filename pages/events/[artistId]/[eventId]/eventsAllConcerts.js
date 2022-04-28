import { FaListUl, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import classes from './eventsAllConcerts.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const EventsAllConcerts = (props) => {
    const {eventDates} = props
    const router = useRouter()
    const { locale } = useRouter()
    return (
        <div className={classes.eventsBody}>
            <div className={classes.concertsHeader}>
                <div className={classes.concertsTitle}>
                    <h4 className={classes.concertsTitleH4}>{ locale === "EN" ? "No Concerts Near" : locale === "Es" ? "No hay conciertos cerca" : "" }</h4>
                    <span className={classes.concertsTitleSpan}>{ locale === "EN" ? "(select your city)" : locale === "ES" ? "(seleccione su ciudad)" : "" }</span>
                </div>
                <div className={classes.dFlex}>
                    <div>
                        <select className={classes.select}>
                            <option value="0">{ locale === "EN" ? "Select your dates" : locale === "ES" ? "Seleccione sus fechas" : "" }</option>
                            <option value="1">{ locale === "EN" ? "Date" : locale === "ES" ? "Fechas" : "" }1</option>
                            <option value="2">{ locale === "EN" ? "Date" : locale === "ES" ? "Fechas" : "" }2</option>
                            <option value="3">{ locale === "EN" ? "Date" : locale === "ES" ? "Fechas" : "" }3</option>
                        </select>
                    </div>
                    <div className={classes.rightBar}>
                        <div className={classes.listings}>
                            <FaListUl color="white"/>
                            <span className={classes.listingsText}>{ locale === "EN" ? "Listings" : locale === "EN" ? "listados" : "" }</span>
                        </div>
                        <div className={classes.calendar}>
                            <FaCalendarAlt />
                            <span className={classes.calendarText}>{ locale === "EN" ? "Calendar" : locale === "ES" ? "Calendario" : "" }</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.allConcertsbody}>
                <h5 className={classes.allConcertsTitle}>{ locale === "EN" ? "All Concerts" : locale === "ES" ? "Todos los conciertos" : "" }</h5>
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
                                    { locale === "EN" ? "See Tickets" : locale === "ES" ? "Ver entradas" : "" }
                                </a>
                            </div>
                        </div>
                    )) }
                </div>
                <div className={classes.loadMore}>
                    { eventDates.length > 10 ? <button className={classes.loadMoreBtn}>{ locale === "EN" ? "Load More" : locale === "ES" ? "Cargamas" : "" }</button> : "" }
                </div>
            </div>
        </div>
    );
  };
  
  export default EventsAllConcerts;