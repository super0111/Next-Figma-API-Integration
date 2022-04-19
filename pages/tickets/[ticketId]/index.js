import React, {useContext, useEffect, useMemo} from "react";
import Layout from "../../../modules/layout/Layout"
import Header from "../../../components/home/homepage1/Header"
import HeaderBody from "./HeaderBody"
import { getTicketDetails } from "../../../data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TimerBar from '../../../components/tickets/timerBar';
import StatusBar from '../../../components/tickets/statusBar';
import ShoppingCartSummary from '../../../components/tickets/shoppingCartSummary'
import Payment from '../../../components/tickets/payment'
import classes from './index.module.css'
import { useShopContext } from '../../../context/shopContext';

const Ticket = (props) => {
    const { state, setState } = useShopContext();
    const tickets = props.tickets;
    useEffect(() => {
        setState({ cart: tickets})
    }, [tickets])
  
    return(
        <Layout>
            <Header />
            <HeaderBody />
            <div className={classes.cont}>
                <TimerBar />
                <StatusBar />
                <ShoppingCartSummary />
                <Payment />
            </div>
            <ToastContainer />
        </Layout>
    )
}
export default Ticket

export async function getServerSideProps(ctx) {
    const { ticketId } = ctx.query;
    const tickets = await getTicketDetails(ticketId);
    return {
      props: { tickets },
    };
  }