import { useContext } from "react"
import classes from './sports.module.css'
import { useRouter } from 'next/router'
import { Context } from "./../../AppContext";

export default function Sport(props) {
    const { lang_value } = useContext(Context)
    const { Sports } = props
    const { locale } = useRouter()
    return (
        <div className={classes.sports}>
            <div className={classes.dFlex}>
                <div className={classes.concertsField}>
                    <span className={classes.title}>{lang_value["topSelling"]["sports"][locale]}</span>
                    <div className={classes.dFlex}>
                        <button className={classes.seeAllBtn}>{lang_value["topSelling"]["seeAll"][locale]}</button>
                        <img className={classes.seeAllIcon} src="/images/Homepage1/Arrow 1.png" />
                    </div>
                </div>
            </div>
            <div className={classes.cardsBody}>
                {Sports.filter(p => p.locale === locale).map((Sport, i) => (
                    <div key={i} className={classes.cards}>
                        <div className={classes.relative}>
                            <img className={classes.cardImg} src={Sport.url} />
                            <div className={classes.cardSelling}>
                                <div className={classes.star}>
                                    {Sport.star}
                                    <img className={classes.starImg} src="/images/Homepage1/star.png" />    
                                </div> 
                                <div className={classes.events}>{Sport.events}{lang_value["topSelling"]["events"][locale]}</div>   
                            </div>
                        </div>
                        <div className={classes.cardTextField}>
                            <h4 className={classes.cardTitle}>{Sport.title}</h4>
                            <span className={classes.cardText}>{Sport.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
            