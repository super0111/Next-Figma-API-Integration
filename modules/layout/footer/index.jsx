
  import classes from './index.module.css'
  import { useRouter } from 'next/router'
import { useContext } from 'react'
import { Context } from '../../../components/AppContext'

  const helpfulLinks = [
    { title: 'My Account', locale: "EN", },
    { title: 'Ticket Your Event', locale: "EN", },
    { title: 'Refunds and Exchanges', locale: "EN", },
    { title: 'Get Help', locale: "EN", },
    { title: 'Sell', locale: "EN", },
    { title: 'Gift Cards', locale: "EN", },
    { title: 'N.Y Registered Brokers', locale: "EN", },
    { title: 'Do Not Sell My Information', locale: "EN", },
    { title: 'My Account', locale: "ES", },
    { title: 'Ticket Your Event', locale: "ES", },
    { title: 'Refunds and Exchanges', locale: "ES", },
    { title: 'Get Help', locale: "ES", },
    { title: 'Sell', locale: "ES", },
    { title: 'Gift Cards', locale: "ES", },
    { title: 'N.Y Registered Brokers', locale: "ES", },
    { title: 'Do Not Sell My Information', locale: "ES", },
  ]
const ourNetworks = [
    { title: 'Live Nation', locale: "EN", },
    { title: 'House of Blues', locale: "EN", },
    { title: 'Front Gate Tickets', locale: "EN", },
    { title: 'Ticket Web', locale: "EN", },
    { title: 'universe', locale: "EN", },
    { title: 'NFL TicketWeb', locale: "EN", },
    { title: 'NBATICKETS.com', locale: "EN", },
    { title: 'NHL Ticket Exchange', locale: "EN", },
    { title: 'Live Nation', locale: "ES", },
    { title: 'House of Blues', locale: "ES", },
    { title: 'Front Gate Tickets', locale: "ES", },
    { title: 'Ticket Web', locale: "ES", },
    { title: 'universe', locale: "ES", },
    { title: 'NFL TicketWeb', locale: "ES", },
    { title: 'NBATICKETS.com', locale: "ES", },
    { title: 'NHL Ticket Exchange', locale: "ES", },
]
const aboutUss = [
    { title: 'Whoe We Are', locale: "EN", },
    { title: 'Ticketmaster Blog', locale: "EN", },
    { title: 'Ticketing 101', locale: "EN", },
    { title: 'Privacy Policy', locale: "EN", },
    { title: 'Work With Us', locale: "EN", },
    { title: 'Across the Globe', locale: "EN", },
    { title: 'Innovation', locale: "EN", },
    { title: 'Whoe We Are', locale: "ES", },
    { title: 'Ticketmaster Blog', locale: "ES", },
    { title: 'Ticketing 101', locale: "ES", },
    { title: 'Privacy Policy', locale: "ES", },
    { title: 'Work With Us', locale: "ES", },
    { title: 'Across the Globe', locale: "ES", },
    { title: 'Innovation', locale: "ES", },
]
const friendsPartners = [
    { title: 'American Express', locale: "EN", },
    { title: 'Allianz', locale: "EN", },
    { title: 'AWS', locale: "EN", },
    { title: 'American Express', locale: "ES", },
    { title: 'Allianz', locale: "ES", },
    { title: 'AWS', locale: "ES", },
]

export default function Footer() {
    const { locale } = useRouter()
    const { lang_value } = useContext(Context)
    return (
        <div className={`${classes.footer} ${classes.footerBg}`}>
            <div className={classes.footerItemField}>
                <div className={classes.footerItem}>
                    <div className={classes.footerTitlefield}>
                        <h5 className={classes.footerTitle}>{lang_value["footer"]["helpfull"][locale]}</h5>
                        <img className={classes.footerTitleLine} src="/images/bottom-line.png" />
                    </div>
                    {helpfulLinks.filter(p => p.locale === locale).map((helpfulLink) => (
                        <div key={helpfulLink.title} className={classes.footerTextItem}>
                            <img className={classes.footerTextIcon} src="/images/select-allow.png" />
                            <span className={classes.footerText}>{helpfulLink.title}</span>
                        </div>
                    ))}
                </div>
                <div className={classes.footerItem}>
                    <div className={classes.footerTitlefield}>
                        <h5 className={classes.footerTitle}>{lang_value["footer"]["network"][locale]}</h5>
                        <img className={classes.footerTitleLine} src="/images/bottom-line.png" />
                    </div>
                    {ourNetworks.filter(p => p.locale === locale).map((ourNetwork) => (
                        <div key={ourNetwork.title} className="d-flex jsutify-contnet-start align-items-center cursor-pointer footer-text-item">
                            <img className={classes.footerTextIcon} src="/images/select-allow.png" />
                            <span className={classes.footerText}>{ourNetwork.title}</span>
                        </div>
                    ))}
                </div>
                <div className={classes.footerItem}>
                    <div className={classes.footerTitlefield}>
                        <h5 className={classes.footerTitle}>{lang_value["footer"]["about"][locale]}</h5>
                        <img className={classes.footerTitleLine} src="/images/bottom-line.png" />
                    </div>
                    {aboutUss.filter(p => p.locale === locale).map((aboutUs) => (
                        <div key={aboutUs.title} className="d-flex jsutify-contnet-start align-items-center cursor-pointer footer-text-item">
                            <img className={classes.footerTextIcon} src="/images/select-allow.png" />
                            <span className={classes.footerText}>{aboutUs.title}</span>
                        </div>
                    ))}
                </div>
                <div className={classes.footerItem}>
                    <div className={classes.footerTitlefield}>
                        <h5 className={classes.footerTitle}>{lang_value["footer"]["friends"][locale]}</h5>
                        <img className={classes.footerTitleLine} src="/images/bottom-line.png" />
                    </div>
                    {friendsPartners.filter(p => p.locale === locale).map((friendsPartner) => (
                        <div key={friendsPartner.title} className="d-flex jsutify-contnet-start align-items-center cursor-pointer footer-text-item">
                            <img className={classes.footerTextIcon} src="/images/select-allow.png" />
                            <span className={classes.footerText}>{friendsPartner.title}</span>
                        </div>
                    ))}
                    <div className="d-flex justify-content-start align-items-center footer-ourApp-text-title">
                        <h5 className={classes.footerTitle}>{lang_value["footer"]["app"][locale]}</h5>
                        <img className={classes.ourAppIcon} src="/images/apple.png" />
                        <img className={classes.ourAppIcon} src="/images/Unity.png" />
                    </div>
                </div>
            </div>
            <img className={classes.divider} src="/images/Rectangle 40.png" />
            <div className={classes.footerLogoField}>
                <img className={classes.logoImg} src="/images/Homepage1/logo-white 1.png" />
                <div className={classes.socialIconField}>
                    <img className={classes.socialIcon} src="/images/Group 43.png" />
                    <img className={classes.socialIcon} src="/images/Group 47.png" />
                    <img className={classes.socialIcon} src="/images/Group 44.png" />
                    <img className={classes.socialIcon} src="/images/Group 46.png" />
                    <img className={classes.socialIcon} src="/images/Group 45.png" />
                </div>
            </div>
            <img className={classes.divider} src="/images/Rectangle 40.png" />
            <div className={classes.footerBottom}>
                <span className={classes.footerBottomText}>
                    {lang_value["footer"]["text1"][locale]}
                </span>
                <div className={classes.dFlex}>
                    <span className={classes.footerBottomText}>{lang_value["footer"]["text2"][locale]}</span>
                    <img className={classes.borderVertical} src="/images/Rectangle 42.png" />
                    <div className={classes.dFlex}>
                        <img className={classes.flagIcon} src="/images/image 2.png" />
                        <span className={classes.footerBottomText}>{lang_value["footer"]["united"][locale]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
            