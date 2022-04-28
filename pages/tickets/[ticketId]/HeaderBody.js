import classes from "./HeaderBody.module.css"
import { useRouter } from 'next/router';

const HeaderBody = () => {
    const { locale } = useRouter();
    return (
        <div className={classes.headerBody}>
            <div className={classes.title}>{ locale === "EN" ? "Ticket Cart" : locale === "ES" ? "Carrito de boletos" : "" }</div>
        </div>
    )
}
export default HeaderBody