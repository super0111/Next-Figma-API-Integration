import React from "react";
import Layout from "../../../modules/layout/Layout"
import Header from "../../../components/home/homepage1/Header"
import HeaderBody from "./HeaderBody"
import { getTicketDetails } from "../../../data";


import TimerBar from '../../../components/tickets/timerBar';
import StatusBar from '../../../components/tickets/statusBar';
import ShoppingCartSummary from '../../../components/tickets/shoppingCartSummary'
import Payment from '../../../components/tickets/payment'
import classes from './index.module.css'
import { useShopContext } from '../../../context/shopContext';

const Ticket = (props) => {
    const tickets = props.tickets;
    const {state} = useShopContext()
    console.log("context state", state)
    return(
        <Layout>
            <Header />
            <HeaderBody />
            <div className={classes.cont}>
                <TimerBar />
                <StatusBar />
                <ShoppingCartSummary tickets = {tickets} />
                <Payment />
            </div>
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