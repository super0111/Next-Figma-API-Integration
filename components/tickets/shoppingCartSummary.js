import { useShopContext } from '../../context/shopContext';
import classes from './shoppingCartSummary.module.css';
import { Rings } from  'react-loader-spinner'
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Context } from '../AppContext';

export default function shoppingCartSummary() {
  const { locale } = useRouter()
  const { state, funcs } = useShopContext();
  const { cart } = state;
  const totalFees = Math.round(cart.totalPrice * 8) / 100;
  const { lang_value } = useContext(Context)
  if (!cart)
    return (
      <div className={classes.dFlex}>
        <div className={classes.loadingText}>{lang_value["tickets"]["loading"][locale]}</div>
        <Rings color="#00BFFF" height={120} width={120} />
      </div>
    )

  return (
    <div className={classes.cont}>
      <div className={classes.ticket_title}>{lang_value["tickets"]["details"][locale]}</div>
      <div className={classes.ticket_body}>
          <div className={classes.dFlex}>
            <div className={classes.item_name}>{lang_value["tickets"]["title"][locale]}</div>
            <div className={classes.item_value}>{cart.title}</div>
          </div>
          <div className={classes.dFlex}>
            <div className={classes.item_name}>{lang_value["tickets"]["number"][locale]}</div>
            <div className={classes.item_value}>{cart.quantity}</div>
          </div>
          <div className={classes.dFlex}>
            <div className={classes.item_name}>{lang_value["tickets"]["price"][locale]}</div>
            <div className={classes.item_value}>
              ${cart.totalPrice}{' '}
              <span className={classes.fees}>
              {lang_value["tickets"]["includeFee"][locale]}
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
