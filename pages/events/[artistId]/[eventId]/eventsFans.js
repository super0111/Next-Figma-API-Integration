import {Context} from './../../../../components/AppContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import classes from './eventsFans.module.css'

const EventsFans = (props) => {
    const { Families } = props
    const { locale } = useRouter()
    const { lang_value } = useContext(Context)
    return (
        <div className={classes.fans}>
            <div className={classes.dFlex}>
                <h5 className={classes.title}>{lang_value["eventsHome"]["fan"][locale]}</h5>
                <div className={classes.dFlex}>
                    <button className={classes.seeAllButton}>{lang_value["eventsHome"]["seeAll"][locale]}</button>
                    <img className={classes.seeAllIcon} src="/images/Homepage1/Arrow 1.png" />
                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.cardsBody}>
                    {Families.filter(p => p.locale === locale).map((Family, i) => (
                        <div key={i} className={`${classes.familyColMd3} ${classes.cards}`}>
                            <div className={classes.relative}>
                                <img className={classes.fansCardImg} src={Family.url} />
                                <div className={classes.cardSelling}>
                                    <div className={classes.star}>
                                        {Family.star}
                                        <img className={classes.starImg} src="/images/Homepage1/star.png" />    
                                    </div> 
                                    <div className={classes.eventsText}>{Family.events} {lang_value["events"][locale]}</div>   
                                </div>
                                <div className={classes.favorite}>
                                    <img className={classes.favoriteImg} src="/images/Events/Group 65.png" />
                                </div>
                            </div>
                            <div className={classes.cardText}>
                                <h4 className={classes.fansTitle}>{Family.title}</h4>
                                <span className={classes.fansText}>{Family.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
  };
  
  export default EventsFans;