import Layout from '../../../../modules/layout/Layout';
import HeaderNav from './Header/headerNav';
import EventsHeader from './eventsHeader';
import EventsEricChurch from './eventsEricChurch';
import EventsAllConcerts from './eventsAllConcerts';
import EventsFans from './eventsFans';
import { getArtistDetails, getEvent } from '../../../../data';
import { useRouter } from 'next/router';
import ArtistBio from '../../../../components/artists/ArtistBio';
import { useQuery } from 'react-query';
import { getEventDates, getTickets, getFamilyById, getFamily } from '../../../../utils/db';
import { useState } from 'react';

export default function EventPage(props) {
  const { event, artistDetails, Families } = props;
  const router = useRouter();
  const { locale } = useState()
  console.log("envet locale", locale)
  const [state, setState] = useState("Events");
  // const eventsPage = !router.asPath.match('#bio');

  const { data, isLoading, isError } = useQuery(
    ['eventDates', event.id],
    () => {
      return getEventDates(event);
    }
  );

  if (isLoading) return <div>{ locale === "EN" ? "React Skelleton should be here" : locale === "ES" ? "Reaccionar Skelleton deberia estar aquí" : "" }</div>;
  if (isError) return <div>{ locale === "EN" ? "Error component should be here" : locale === "ES" ? "El componente de error deberia estar aquí" : ""}</div>;

  return (
    <Layout>
      <HeaderNav />
      <EventsHeader event = { event } eventDates={data}  state = {state} setState = {setState} />
      {state == "Events" ? (
        <EventsAllConcerts eventDates={data} />
        ) : state == "Reviews" ? "" : (
          <ArtistBio artistDetails={artistDetails} />
      )}
      <EventsEricChurch />
      <EventsFans Families = { Families } />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const { artistId, eventId } = ctx.query;
  const Families = await getFamily();
  const event = await getEvent(artistId, eventId);
  const artistDetails = (await getArtistDetails(artistId)) || null;
  return {
    props: { event, artistDetails, Families },
  };
}
