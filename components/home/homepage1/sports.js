
import classes from './sports.module.css'
import { useRouter } from 'next/router'

export default function Sport(props) {
    const { Sports } = props
    const { locale } = useRouter()
    return (
        <div className={classes.sports}>
            <div className={classes.dFlex}>
                <div className={classes.concertsField}>
                    <span className={classes.title}>{ locale === "EN" ? "Sports" : locale === "ES" ? "deportes" : "" }</span>
                    <div className={classes.dFlex}>
                        <button className={classes.seeAllBtn}>{ locale === "EN" ? "See All" : locale === "ES" ? "Ver Todo" : "" }</button>
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
                                <div className={classes.events}>{Sport.events} { locale === "EN" ? "Eventos" : locale === "ES" ? "Eventos" : "" }</div>   
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
            