import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Button from '../ui/Button3';
import classes from './EventBar.module.css';
import {Context} from "./../../../components/AppContext"

export default function EventBar(props) {
  const { event, eventDate, artist } = props;
  const { locale } = useRouter();
  const { lang_value } = useContext(Context)
  if (!event) return null;
  return (
    <div className={classes.bar}>
      <Image
        className={classes.img}
        src={`/images/artists/${artist.id}/${artist.smallImage}`}
        width='250px'
        height='150px'
      />
      <div className={classes.det}>
        <div className={classes.hdr}>
          <span className={classes.tit}>{event.artist.name}</span> 
          <Button link={`../${event.id}`}>{lang_value["moreInfo"][locale]}</Button>
        </div>
        <span className={classes.txt}>{eventDate.date}</span>
        <span className={classes.txt}>
          {eventDate.venue}, {eventDate.city}
        </span>
      </div>
    </div>
  );
}
