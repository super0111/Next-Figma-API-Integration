import { useShopContext } from '../../context/shopContext';
import classes from './shoppingCartSummary.module.css';

export default function shoppingCartSummary(props) {
  const tickets = props.tickets;
  const { state, funcs } = useShopContext();
  const { cart } = state;

  if (!cart)
    //TODO: return Skeleton instead
    return <span>Loading...</span>;

  return (
    <div className={classes.cont}>
      <div className={classes.ticket_title}>Ticket Details</div>
      <div className={classes.ticket_body}>
          <div className={classes.dFlex}>
            <div className={classes.item_name}>Number of tickets:</div>
            <div className={classes.item_value}>{cart.ticketsCnt}</div>
          </div>
          <div className={classes.dFlex}>
            <div className={classes.item_name}>Price of tickets:</div>
            <div className={classes.item_value}>
              ${cart.total} {cart.currency}{' '}
              <span className={classes.fees}>
                includes fees
                <span className={classes.feesDetail}>
                  ${cart.totalFees} {cart.currency}
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
