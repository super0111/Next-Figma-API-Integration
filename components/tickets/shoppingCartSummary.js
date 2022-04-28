import { useShopContext } from '../../context/shopContext';
import classes from './shoppingCartSummary.module.css';
import { Rings } from  'react-loader-spinner'
import { useRouter } from 'next/router';

export default function shoppingCartSummary() {
  const { locale } = useRouter()
  const { state, funcs } = useShopContext();
  const { cart } = state;
  const totalFees = Math.round(cart.totalPrice * 8) / 100;
  if (!cart)
    return (
      <div className={classes.dFlex}>
        <div className={classes.loadingText}>{ locale === "EN" ? "Loading..." : locale === "ES" ? "Cargando..." : "" }</div>
        <Rings color="#00BFFF" height={120} width={120} />
      </div>
    )

  return (
    <div className={classes.cont}>
      <div className={classes.ticket_title}>{ locale === "EN" ? "Ticket Details" : locale === "ES" ? "Details of the billet" : "" }</div>
      <div className={classes.ticket_body}>
          <div className={classes.dFlex}>
            <div className={classes.item_name}>{ locale ? "Title of tickets:" : locale === "ES" ? "Title de las entradas:" : "" }</div>
            <div className={classes.item_value}>{cart.title}</div>
          </div>
          <div className={classes.dFlex}>
            <div className={classes.item_name}>{ locale === "EN" ? "Number of tickets:" : locale === "ES" ? "Numero de entradas:" : "" }</div>
            <div className={classes.item_value}>{cart.quantity}</div>
          </div>
          <div className={classes.dFlex}>
            <div className={classes.item_name}>{ locale === "EN" ? "Price of tickets:" : locale === "ES" ? "Precio de las entradas:" : "" }</div>
            <div className={classes.item_value}>
              ${cart.totalPrice}{' '}
              <span className={classes.fees}>
              { locale === "EN" ? "includes fees" : locale === "ES" ? "including tariffs" : "" }
                <span className={classes.feesDetail}>
                  ${totalFees} {cart.currency}
                </span>
              </span>
            </div>
          </div>
          <div className={classes.dFlex}>
            <div className={classes.item_name}>{ locale === "EN" ? "Payment medivod fee:" : locale === "ES" ? "Pago tarifa medivod:" : "" }</div>
            <div className={classes.item_value}>
              ${cart.paymentFee ? cart.paymentFee : 0} {cart.currency}
            </div>
          </div>
          <div className={classes.dFlex}>
            <div className={classes.item_name}>{ locale === "EN" ? "Total charge:" : locale === "ES" ? "Carga total:" : "" }</div>
            <div className={classes.item_value}>
              ${cart.totalCharge ? cart.totalCharge : cart.total}{' '}
              {cart.currency}
            </div>
          </div>
      </div>
    </div>
  );
}
