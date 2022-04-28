import {Context} from "./../../../../components/AppContext";
import { useRouter } from 'next/router';
import { useContext } from 'react';
import classes from './eventsEricChurch.module.css';

const EventsEricChurch = () => {
    const { locale } = useRouter();
    const { lang_value } = useContext(Context)
    return (
        <div className={classes.ericChurch}>
            <h5 className={classes.ericChurchTitle}>{lang_value["eventsHome"]["fromEric"][locale]}</h5>
            <span className={classes.followText}>{lang_value["eventsHome"]["follow"][locale]}</span>
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