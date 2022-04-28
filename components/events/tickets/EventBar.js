import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../ui/Button3';
import classes from './EventBar.module.css';
export default function EventBar(props) {
  const { event, eventDate, artist } = props;
  const { locale } = useRouter();
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
          <Button link={`../${event.id}`}>{ locale === "EN" ? "More Info" : locale === "ES" ? "Más information" : "" }</Button>
        </div>
        <span className={classes.txt}>{eventDate.date}</span>
        <span className={classes.txt}>
          {eventDate.venue}, {eventDate.city}
        </span>
      </div>
    </div>
  );
}
