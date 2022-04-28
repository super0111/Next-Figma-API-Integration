import { useRouter } from 'next/router';
import classes from './eventsEricChurch.module.css';

const EventsEricChurch = () => {
    const { locale } = useRouter();
    return (
        <div className={classes.ericChurch}>
            <h5 className={classes.ericChurchTitle}>{ locale === "EN" ? "From Eric Church" : locale === "ES" ? "De la iglesia de Eric" : "" }</h5>
            <span className={classes.followText}>{ locale === "EN" ? "Follow" : locale === "ES" ? "Seguir" : "" }</span>
            <div className={classes.socialIcon}>
                <img className={classes.socialIconImg} src="/images/Events/Group 43.png" />
                <img className={classes.socialIconImg} src="/images/Events/Group 47.png" />
                <img className={classes.socialIconImg} src="/images/Events/Group 44.png" />
                <img className={classes.socialIconImg} src="/images/Events/Group 46.png" />
                <img className={classes.socialIconImg} src="/images/Events/Group 45.png" />
            </div>
        </div>
    );
  };
  
  export default EventsEricChurch;