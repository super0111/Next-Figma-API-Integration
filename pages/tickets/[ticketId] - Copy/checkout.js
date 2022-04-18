import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

import classes from './checkout.module.css';
import { payWithCard } from '../../../utils/payment';
import { useShopContext } from '../../../context/shopContext';

export default function Checkout(props) {
  const { state, funcs } = useShopContext();

  //TODO: cart should be in shopContext
  let cart = {
    itemsPrice: 410,
    orderCharge: 30,
    total: 440,
  };

  function onCheckout() {
    funcs.setStage('paying');
  }

  function Skeleton() {
    //Todo use skeleton
    return <span>Loading...</span>;
  }

  function ShoppingCart() {
    return (
      <div className={classes.cont}>
        <div className={classes.right_body}>
          <div className={classes.right_title}>CART SUMMARY</div>
          <div className={classes.border}></div>
          <div className={classes.flexRow}>
            <div className={classes.summary_text}>Subtotal</div>
            <div className={classes.summary_text}>${cart.itemsPrice}</div>
          </div>
          <div className={classes.flexRow}>
            <div className={classes.summary_text}>Order Charge</div>
            <div className={classes.summary_text}>${cart.orderCharge}</div>
          </div>
          <div className={classes.flexRow}>
            <div className={classes.summary_text}>Delivery Charge</div>
            <div className={classes.summary_text}>$0</div>
          </div>
          <div className={classes.flexRow}>
            <div className={classes.summary_bold}>Total</div>
            <div className={classes.summary_bold}>${cart.total}</div>
          </div>
          <button className={classes.checkout_btn} onClick={onCheckout}>
            CHECKOUT
          </button>
        </div>
      </div>
    );
  }

  function Paying() {
    return (
      <div>
        <div>
          <div className={classes.right_title}>SHOPPING CART</div>
          <div className={classes.border}></div>
          <div className={classes.flexRow}>
            <div className={classes.summary_text}>Subtotal</div>
            <div className={classes.summary_text}>${cart.itemsPrice}</div>
          </div>
          <div className={classes.flexRow}>
            <div className={classes.summary_text}>Order Charge</div>
            <div className={classes.summary_text}>${cart.orderCharge}</div>
          </div>
          <div className={classes.flexRow}>
            <div className={classes.summary_text}>Delivery Charge</div>
            <div className={classes.summary_text}>$0</div>
          </div>
          <div className={classes.flexRow}>
            <div className={classes.summary_text}>Payment Method Charge</div>
            <div className={classes.summary_text}>$0</div>
          </div>
          <div className={classes.flexRow}>
            <div className={classes.summary_bold}>Total</div>
            <div className={classes.summary_bold}>${cart.total}</div>
          </div>
          <div className={classes.border}></div>
        </div>
        <div>
          <div className={classes.right_title}>PAYMENT METHOD</div>
          <div className={classes.border}></div>
          <select>
            <option value='card' selected>Credit Card (2% charge)</option>
          </select>
        </div>
      </div>
    );
  }

  console.log(state.stage);
  switch (state.stage) {
    case 'init':
      return Skeleton();
    case 'shopping':
      return ShoppingCart();
    case 'paying':
      return Paying();
  }
}
