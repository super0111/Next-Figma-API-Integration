import classes from './topSelling.module.css';
import { useRouter } from "next/router"


export default function TopSelling(props) {
    const { TopSellings } = props
    const { locale } = useRouter()
    return (
        <div className={classes.topSelling}>
            <div className={classes.dFlex}>
                <div className={classes.flexColumn}>
                    <div className={classes.dFlex}>
                        <h1 className={classes.topTitle}>{ locale === "EN" ? "Top Selling" : locale === "ES" ? "Mas vendidos" : ""}</h1>
                        <div className={classes.borderHor}></div>
                    </div>
                    <div className={classes.concertsField}>
                        <span className={classes.title}>{ locale === "EN" ? "Concerts" : locale === "ES" ? "Conciertos" : "" }</span>
                        <div className={classes.dFlex}>
                            <button className={classes.seeAllBtn}>{ locale === "EN" ? "See All" : locale === "ES" ? "Ver Todo" : ""}</button>
                            <img className={classes.seeAllIcon} src="/images/Homepage1/Arrow 1.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.cardsBody}>
                {TopSellings.filter(p => p.locale === locale).map((TopSelling) => (
                    <div key={TopSelling.title} className={classes.cards}>
                        <div className={classes.relative}>
                            <img className={classes.cardImg} src={TopSelling.url} />
                            <div className={classes.cardSelling}>
                                <div className={classes.star}>
                                    {TopSelling.star}
                                    <img className={classes.starImg} src="/images/Homepage1/star.png" />    
                                </div> 
                                <div className={classes.events}>{TopSelling.events}{ locale === "EN" ? "Events" : locale === "ES" ? "Eventos" : ""}</div>   
                            </div>
                        </div>
                        <div className={classes.cardTextField}>
                            <h4 className={classes.cardTitle}>{TopSelling.title}</h4>
                            <span className={classes.cardText}>{TopSelling.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
            