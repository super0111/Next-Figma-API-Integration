import classes from './ticketsListBody.module.css';
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';

const Lowest = (props) => {
    const { lowestLists, selectValue, ticketCount } = props
    const { locale } = useRouter()
    const router = useRouter()
    if(selectValue !== undefined) {
        lowestLists = lowestLists.filter((item) => item.comment == selectValue);
    }
    if(ticketCount !== undefined) {
        lowestLists = lowestLists.filter((item) => item.row == ticketCount);
    }

    return (
        <div className={classes.listHeight}>
            {
                lowestLists.filter(p => p.locale === locale).map((lowestList, i) => (
                    <a 
                        onClick={() => {
                            router.push(`/tickets/${lowestList.ticketId}`, `/tickets/${lowestList.ticketId}`, { locale: locale })
                        }}
                        locale={locale}
                        key={i} 
                        className={classes.ticketsItem}
                    >
                        <div className={`${classes.dFlex} ${classes.width100}`}>
                            <div className={classes.dFlexColumn}>
                                <span className={classes.listSec}>{lowestList.title}, {lowestList.row} Row</span>
                                <span className={classes.comoment}>{lowestList.comment}</span>
                            </div>
                            <div className={classes.dFlexColumn}>
                                <span className={classes.price}>${lowestList.price} USD</span>
                                <span className={classes.comoment}>{lowestList.type}</span>
                            </div>
                        </div> 
                        <div className={classes.borderBottom}></div>   
                    </a>
                ))
            }
        </div>
    )
}

const Section = (props) => {
    const { sectionLists, selectValue, ticketCount } = props
    const { locale } = useRouter()
    const router = useRouter()
    if(selectValue !== undefined) {
        sectionLists = sectionLists.filter((item) => item.comment == selectValue);
    }
    if(ticketCount !== undefined) {
        sectionLists = sectionLists.filter((item) => item.row == ticketCount);
    }
    return (
        <div className={classes.listHeight}>
                { sectionLists.filter(p => p.locale === locale).map((sectionList) => (
                    <a 
                        onClick={() => {
                            router.push(`/tickets/${sectionList.ticketId}`, `/tickets/${sectionList.ticketId}`, { locale: locale })
                        }}
                        locale={locale}
                        key={sectionList.title} 
                        className={classes.ticketsItem}
                    >
                        <div className={`${classes.dFlex} ${classes.width100}`}>
                            <div className={classes.dFlexColumn}>
                                <span className={classes.listSec}>{sectionList.title}, {sectionList.row} Row</span>
                                <span className={classes.comoment}>{sectionList.comment}</span>
                            </div>
                            <div className={classes.dFlexColumn}>
                                <span className={classes.price}>${sectionList.price}</span>
                                <span className={classes.comoment}>{sectionList.type}</span>
                            </div>
                        </div> 
                        <div className={classes.borderBottom}></div>   
                    </a>
                ))}
        </div>
    )
}


const TicketsListBody = (props) => {
    const { locale } = useRouter();
    const selectValue = props.selectValue?.label;
    const ticketCount = props.ticketCount?.value;
    const { lowestLists, sectionLists } = props
    const [ status, setStatus ] = useState("lowest");
    return (
        <div className={classes.ticketsListBody}>
            <div className={classes.TicketsListHeader}>
                <div onClick={() => setStatus("lowest")} className={classes.left}>
                    <span className={classes.lowestTitle}>{ locale === "EN" ? "Lowest Price" : locale === "ES" ? "El precio mas bajo" : "" }</span>
                    <div className={ status==="lowest" ? classes.activeBorder : classes.ListHeaderborder }></div>    
                </div>
                <div onClick={() => setStatus("section")} className={classes.right}>
                    <span className={classes.sectionTitle}>{ locale === "EN" ? "Section" : locale === "ES" ? "Sección" : "" }</span>
                    <div className={ status==="section" ? classes.activeBorder : classes.ListHeaderborder }></div> 
                </div>
            </div>
            { status==="lowest" ? <Lowest lowestLists={lowestLists} ticketCount={ticketCount} selectValue={selectValue} /> : <Section sectionLists={sectionLists} ticketCount={ticketCount} selectValue={selectValue} />
            }
        </div>
    )
}

export default TicketsListBody;