import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const ShopContext = createContext();

export function ShopContextProvider({ children }) {
  const [state, setState] = useState({
    stage: 'init',
    cart: {
      ticketsCnt: 2,
      total: 440,
      totalFees: 30,
      currency: 'USD',
    },
  });

  function setStage(newStage) {
    setState({ ...state, stage: newStage });
  }

  function setError(data) {
    setState({ ...state, stage: 'error' });
  }

  function triggerTimeout() {
    //TODO: Notify server?
    setStage('timeout');
  }

  function setPaymentFee(paymentFee) {
    const fee = Math.round(state.cart.total * paymentFee * 100) / 100;
    setState({
      ...state,
      cart: {
        ...state.cart,
        paymentFee: fee,
        totalCharge: state.cart.total + fee,
      },
    });
  }

  function authorizePayment(payment) {
    axios
      .post('/api/shop/authorize', {
        data: {
          total: { amount: state.cart.total, currency: state.cart.currency },
        },
      })
      .then(res => { 
          if (res.status == 200 )
            onPaymentAuthorized(res.data) 
            else 
            setError(res.data)})
      .catch(err=> {
          console.log({err}); })
  }

  function onPaymentAuthorized(data) {
    setState({ ...state, stage: 'authorized', ...data });
  }

  function capturePayment(payment) {
    axios
      .post('/api/shop/capture', {
        data: {
          transactionId: state.transactionId,
          orderId: state.orderId,
        },
      })
      .then((res) =>
        res.status == 200 ? onPaymentCaptured(res.data) : setError(res.data)
      );
  }

  function onPaymentCaptured(data) {
    setState({ ...state, stage: 'captured', ...data });
  }

  useEffect(() => {
    getSession().then((res) =>
      setState({ ...state, stage: 'shopping', session: res.data })
    );
  }, []);

  const ctx = {
    state,
    funcs: {
      setStage,
      triggerTimeout,
      setPaymentFee,
      authorizePayment,
      capturePayment,
    },
  };

  return <ShopContext.Provider value={ctx}>{children}</ShopContext.Provider>;
}

export function useShopContext() {
  return useContext(ShopContext);
}

function getSession() {
  return axios.get('/api/shop/session');
}
