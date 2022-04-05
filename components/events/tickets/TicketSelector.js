import classes from './TicketSelector.module.css';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import Skeleton from 'react-loading-skeleton';
import { getVenueSetupByEvent } from '../../../data';
import TicketsList from './ticketsList';
import 'react-loading-skeleton/dist/skeleton.css';

export default function TicketSelector(props) {
  const { eventid } = props;
  const [setup, setSetup] = useState();
  const tickets = [];

  useEffect(() => {
    // Here axios will take time to load the data and then...
    setTimeout(() => {
      const setup = getVenueSetupByEvent(eventid);
      setSetup(setup);
    }, 500);
  }, []);

  if (setup) {
    for (let i = 1; i <= setup.maxTickets; ++i)
    tickets.push({ value: i, label: i });
  }

  const [ zoneState, setZoneState ] = useState([])
  const handleOptionChange = (options) => {
    setZoneState({ options });
  }


  const [ ticketCount, setTicketCount ] = useState([])
  const handleTicketsChange = (options) => {
    setTicketCount({ options });
  }

  return (
    <div className={classes.sel}>
      {setup ? (
        <Select className={classes.selectField} placeholder='Number of Tickets...' options={tickets} onChange={handleTicketsChange} />
      ) : (
        <Skeleton className={classes.selectField} height={38} />
      )}
      {setup ? (
        <Select className={classes.selectField1} placeholder='Select Zone...' options={setup.zones} onChange={handleOptionChange} />
      ) : (
        <Skeleton className={classes.selectField1} height={38} />
      )}
      <TicketsList ticketCount={ticketCount} state={zoneState} />
    </div>
  );
}
