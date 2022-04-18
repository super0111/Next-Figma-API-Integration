import classes from "./index.module.css"
import Layout from "../../../modules/layout/Layout"
import Header from "../../../components/home/homepage1/Header"
import HeaderBody from "./HeaderBody"
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { getTicketDetails } from "../../../data";
import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from 'next/router'

const Ticket = (props) => {
    const tickets = props.tickets;
    const total = tickets.totalPrice + tickets.orderCharge;
    const router = useRouter()

    const [ state, setState ] = useState({ minutes: 5, seconds: 0, start: Date.now() })

    const getTimeUntil = time => {
        const diff = time - (((Date.now() - state.start) / 1000) | 0);
        if (diff <= 0) {
          setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
          const seconds = diff % 60 | 0;
          const minutes = (diff / 60) | 0;
          setState({...state, minutes, seconds });
        }
      };

    useEffect(() => {
        setInterval(() => getTimeUntil(5 * 60), 1000);
      }, []);

      if(state.minutes == 0 && state.seconds == 0) {
        router.back()
      }
    return(
        <Layout>
            <Header />
            <HeaderBody />
            <div className={classes.timer}>
                <div className={classes.flexRow}>
                    <FiShoppingCart color="white" />
                    <div className={classes.timer_text}>{tickets.title}</div>
                </div>
                <div className={classes.time}>Time remaining:  {state.minutes} : {state.seconds>9?state.seconds:'0'+state.seconds}</div> 
            </div>
            <div className={classes.ticket}>
                <div className={classes.title}>Your Cart</div>
                <div className={classes.body}>
                    <div className={classes.left}>
                        <div className={classes.ticket_title_field}>
                            <div className={classes.ticket_title}>{tickets.title}</div>
                            <div className={classes.flexCol}>
                                <div className={classes.total_money}>Itme Total: ${tickets.totalPrice}</div>
                                <div className={classes.fee_money}>includes ${(tickets.totalPrice/11).toFixed(2)} fees</div>
                            </div>
                        </div>
                        <div className={classes.date}>{tickets.date}</div>
                        <div className={classes.details}>
                            <div className={classes.text}>Quantity: {tickets.quantity}</div>
                            <div className={classes.text}>Price Level: {tickets.priceLevel}</div>
                            <div className={classes.text}>Level: {tickets.level}</div>
                            <div className={classes.text}>Section: {tickets.section}</div>
                            <div className={classes.text}>Row: {tickets.Row}</div>
                            <div className={classes.text}>Seats: {tickets.seats}</div>
                        </div>
                        <div className={classes.method}>
                            <div className={classes.method_title}>Delivery Method</div>
                            <div className={classes.radio_field}>
                                <input type="radio" className={classes.radio} name='method'/>
                                <div className={classes.radio_text}>
                                    Mobile Delivery (scan from mobile)
                                </div>
                            </div>
                            <div className={classes.radio_field}>
                                <input type="radio" className={classes.radio} name='method' />
                                <div className={classes.radio_text}>
                                    Print at home tickets by Link
                                </div>
                            </div>
                            <div className={classes.radio_field}>
                                <input type="radio" className={classes.radio} name='method' />
                                <div className={classes.radio_text}>
                                    Will Call - Pickup at Box Office
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.right_body}>
                            <div className={classes.right_title}>CART SUMMARY</div>
                            <div className={classes.border}></div>
                            <div className={classes.flexRow}>
                                <div className={classes.summary_text}>Subtotal</div>
                                <div className={classes.summary_text}>${tickets.totalPrice}</div>
                            </div>
                            <div className={classes.flexRow}>
                                <div className={classes.summary_text}>Order Charge</div>
                                <div className={classes.summary_text}>${tickets.orderCharge}</div>
                            </div>
                            <div className={classes.flexRow}>
                                <div className={classes.summary_text}>Delivery Charge</div>
                                <div className={classes.summary_text}>$0</div>
                            </div>
                            <div className={classes.flexRow}>
                                <div className={classes.summary_bold}>Total</div>
                                <div className={classes.summary_bold}>$ {total}</div>
                            </div>
                            <button className={classes.checkout_btn}>CHECKOUT</button>
                        </div>
                        <button className={`${classes.continueShopping} ${classes.marginTop}`}>
                            <FiShoppingCart className={classes.icon} />
                            <div className={classes.shopping_text}>Continue Shopping</div>
                        </button>
                        <button className={classes.continueShopping}>
                            <AiOutlineDelete className={classes.icon} />
                            <div className={classes.shopping_text}>Cancel Entire Order</div>
                        </button>
                    </div>
                </div>
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