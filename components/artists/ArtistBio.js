import classes from './ArtistBio.module.css';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';

export default function ArtistBio(props) {
  const { artistDetails } = props;
  const { locale } = useRouter()

  return (
    <div className={classes.cont}>
      {artistDetails?.bio ? parse(artistDetails.bio) : locale === "EN" ? 'No Bio' : locale === "ES" ? "Sin biography" : "" }
    </div>
  );
}
