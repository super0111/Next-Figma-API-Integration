import Image from 'next/image';
import { useContext, useState } from 'react';
import { useShopContext } from '../../context/shopContext';
import classes from './payment.module.css';
import { Context } from '../AppContext';
import { useRouter } from 'next/router';

const paymentMethods = [
  {
    method: 'visa',
    img: '/images/Tickets/visa.png',
    w: 86,
    h: 28,
  },
  {
    method: 'mc',
    img: '/images/Tickets/mc.png',
    w: 65,
    h: 40,
  },
  {
    method: 'amex',
    img: '/images/Tickets/amex.png',
    w: 44,
    h: 44,
  },
  {
    method: 'spei',
    img: '/images/Tickets/spei.jpg',
    w: 88,
    h: 28,
  },
  {
    method: 'oxxo',
    img: '/images/Tickets/oxxo.png',
    w: 68,
    h: 38,
  },
];

export default function Payment() {
  const { state, funcs } = useShopContext()
  const { stage } = state
  console.log("stage", stage)

  if (!state) return null;

  return (
    <div className={classes.cont}>
      { stage != 'captured' &&  <PaymentMethod setPaymentFee={funcs.setPaymentFee} /> }
      { stage == 'authorized' && <Confirmation /> }
      { stage == 'captured' && <PurchaseComplete /> }
      { stage == 'error' && <Error /> }
    </div>
  );
}

function PaymentMethod(props) {
  const { setPaymentFee } = props;
  const [sel, setSel] = useState();

  function onMethodChange(e) {
    setSel(e.currentTarget.value);
    const fee = e.currentTarget.value == 'amex' ? 0.03 : 0.02;
    const gst = 0.18;
    setPaymentFee(fee * gst);
  }
  return (
    <>
      <div className={classes.title}>Payment method:</div>
      <div className={classes.pymnt}>
        {paymentMethods.map((m, i) => (
          <div key={i} className={classes.opt}>
            <input
              className={classes.radio}
              type='radio'
              name='method'
              id={m.method}
              value={m.method}
              checked={sel == m.method}
              onChange={onMethodChange}
            />
            <label htmlFor={m.method} className={classes.lbl}>
              <Image src={m.img} width={m.w} height={m.h} />
            </label>
          </div>
        ))}
      </div>
      {sel && <CardForm />}
    </>
  );
}

function CardForm() {
  const { locale } = useRouter()
  const { lang_value } = useContext(Context)
  const [card, setCard] = useState({
    number: '4097440000000004',
    securityCode: '321',
    expirationDate: '2022/12',
    name: 'APPROVED',
  });
  const {
    funcs: { authorizePayment },
  } = useShopContext();

  function onPay(e) {
    e.preventDefault();
    e.currentTarget.disabled = true;
    authorizePayment(card);
  }
  function onCardChange(e) {
    console.log(e.currentTarget);
    let newCard = { ...card };
    newCard[e.currentTarget.name] = e.currentTarget.value;
    setCard(newCard);
  }

  return (
    <form className={classes.form}>
      <div>
        <label className={classes.card_name} htmlFor='nameoncard'>{lang_value["tickets"]["cardName"][locale]}</label>
        <input className={classes.input_value} id='nameoncard' name='nameoncard' placeholder='Enter Card Name' type='text' />
      </div>
      <div>
        <label className={classes.card_name} htmlFor='cardNumber'>
          {lang_value["tickets"]["cardNumber"][locale]}
        </label>
        <input
          className={classes.input_value}
          id='cardNumber'
          name='number'
          type='text'
          placeholder='Enter your credit card number'
          value={card.number}
          onChange={onCardChange}
        />
      </div>
      <div>
        <span  className={classes.card_name}> {lang_value["tickets"]["expDate"][locale]}</span>
        <input className={classes.exp_Date} name='experationdate' type='text' placeholder='MM/YYYY' />
      </div>
      <div className={classes.cvc}>
        <label className={classes.card_name} htmlFor='cvc'>CVC</label>
        <input
          className={classes.input_value}
          id='cvc'
          name='securityCode'
          type='text'
          placeholder='XXX'
          value={card.securityCode}
          onChange={onCardChange}
        />
      </div>
      <div className={classes.btn_field}>
        <button className={classes.buy_btn} type='submit' onClick={onPay}>
          {lang_value["tickets"]["buyNow"][locale]}
        </button>
      </div>
    </form>
  );
}

function Confirmation() {
    const { funcs: {capturePayment} } = useShopContext()
    function pay(e) {
        e.preventDefault()
        e.currentTarget.disabled=true
        capturePayment()
    }
    return (
        <form className={classes.form}>
            <span>Payment accepted!</span>
            <button type='submit' onClick={pay}>Confirm Purchase</button>
        </form>
    )
}

function PurchaseComplete() {
  return <div>
    <h2>Payment successful!</h2>
    <span>Your delivery method is <b>digital ticket</b>, so your ticket(s) will be delievered to your email soon.</span>
  </div>
}

function Error() {
    const { state: { error } } = useShopContext()
    console.log({error})
    return <span>Error!</span>
}
