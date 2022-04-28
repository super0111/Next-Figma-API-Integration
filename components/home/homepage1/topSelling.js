import { useContext } from 'react';
import classes from './topSelling.module.css';
import { useRouter } from "next/router"
import { Context } from "./../../AppContext";

export default function TopSelling(props) {
    const { lang_value } = useContext(Context);
    const { TopSellings } = props
    const { locale } = useRouter()
    console.log("locale", locale)
    return (
        <div className={classes.topSelling}>
            <div className={classes.dFlex}>
                <div className={classes.flexColumn}>
                    <div className={classes.dFlex}>
                        <h1 className={classes.topTitle}>{lang_value["topSelling"]["topSelling"][locale]}</h1>
                        <div className={classes.borderHor}></div>
                    </div>
                    <div className={classes.concertsField}>
                        <span className={classes.title}>{lang_value["topSelling"]["concerts"][locale]}</span>
                        <div className={classes.dFlex}>
                            <button className={classes.seeAllBtn}>{lang_value["topSelling"]["seeAll"][locale]}</button>
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
                                <div className={classes.events}>{TopSelling.events}{lang_value["topSelling"]["events"][locale]}</div>   
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
            