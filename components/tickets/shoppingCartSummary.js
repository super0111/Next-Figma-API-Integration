import { useShopContext } from '../../context/shopContext';
import classes from './shoppingCartSummary.module.css';
import { Rings } from  'react-loader-spinner'


export default function shoppingCartSummary() {
  const { state, funcs } = useShopContext();
  const { cart } = state;
  const totalFees = Math.round(cart.totalPrice * 8) / 100;
  if (!cart)
    return (
      <div className={classes.dFlex}>
        <div className={classes.loadingText}>Loading...</div>
        <Rings color="#00BFFF" height={120} width={120} />
      </div>
    )

  return (
    <div className={classes.cont}>
      <div className={classes.ticket_title}>Ticket Details</div>
      <div className={classes.ticket_body}>
          <div className={classes.dFlex}>
            <div className={classes.item_name}>Title of tickets:</div>
            <div className={classes.item_value}>{cart.title}</div>
          </div>
          <div className={classes.dFlex}>
            <div className={classes.item_name}>Number of tickets:</div>
            <div className={classes.item_value}>{cart.quantity}</div>
          </div>
          <div className={classes.dFlex}>
            <div className={classes.item_name}>Price of tickets:</div>
            <div className={classes.item_value}>
              ${cart.totalPrice}{' '}
              <span className={classes.fees}>
                includes fees
                <span className={classes.feesDetail}>
                  ${totalFees} {cart.currency}
                </span>
              </span>
            </div>
          </div>
          <div className={classes.dFlex}>
            <div className={classes.item_name}>Payment medivod fee:</div>
            <div className={classes.item_value}>
              ${cart.paymentFee ? cart.paymentFee : 0} {cart.currency}
            </div>
          </div>
          <div className={classes.dFlex}>
            <div className={classes.item_name}>Total charge:</div>
            <div className={classes.item_value}>
              ${cart.totalCharge ? cart.totalCharge : cart.total}{' '}
              {cart.currency}
            </div>
          </div>
      </div>
    </div>
  );
}
