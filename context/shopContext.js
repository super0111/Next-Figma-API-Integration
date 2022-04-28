import axios from 'axios';
import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopContext = createContext();

const stateReducer = (state, action) => {
  return { ...state, ...action }
}

export function ShopContextProvider({ children }) {
  const [state, setState] = useReducer(
    stateReducer, {
      stage: 'init',
      cart: {
        // ticketsCnt: 2,
        // totalPrice: 440,
        // totalFees: 30,
        // currency: 'USD',
      },
    }
  );

  function setStage(newStage) {
    setState({ stage: newStage });
  }

  function setError(data) {
    setState({ stage: 'error' });
  }

  function triggerTimeout() {
    setStage('timeout');
  }

  function setPaymentFee(paymentFee) {
    const fee = Math.round(state.cart.totalPrice * paymentFee * 100) / 100;
    setState({
      cart: {
        ...state.cart,
        paymentFee: fee,
        totalCharge: state.cart.totalPrice + fee,
      },
    });
  }

  function authorizePayment(payment) {
    axios
      .post('/api/shop/authorize', {
        data: {
          totalPrice: { amount: state.cart.totalPrice, currency: state.cart.currency },
        },
      })
      .then(res => { 
          if (res.status == 200 ) {
            onPaymentAuthorized(res.data) 
            toast.info("Successfully Authorize")
          } else {
            setError(res.data)
            toast.error("Error", res.data)
          }
      })
      .catch(err=> { console.log({err}); })
  }

  function onPaymentAuthorized(data) {
    setState({ stage: 'authorized', ...data });
  }

  function capturePayment(payment) {
    axios
      .post('/api/shop/capture', {
        data: {
          transactionId: state.transactionId,
          orderId: state.orderId,
        },
      })
      .then((res) =>{
        if(res.status == 200) {
          onPaymentCaptured(res.data)
          toast.info("Successsfully captured")
        } else {
          setError(res.data)
          toast.error("Error", res.data)
        }
      });
  }

  function onPaymentCaptured(data) {
    setState({ stage: 'captured', ...data });
  }

  useEffect(() => {
    getSession().then((res) =>
      setState({ stage: 'shopping', session: res.data })
    );
  }, []);

  const ctx = {
    state,
    setState,
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
