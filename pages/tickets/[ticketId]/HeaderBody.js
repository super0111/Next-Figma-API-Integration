import classes from "./HeaderBody.module.css"
import { useRouter } from 'next/router';
import { useContext } from "react";
import { Context } from "./../../../components/AppContext"

const HeaderBody = () => {
    const { locale } = useRouter();
    const { lang_value } = useContext(Context)
    return (
        <div className={classes.headerBody}>
            <div className={classes.title}>
                {lang_value["tickets"]["ticketCart"][locale]}
            </div>
        </div>
    )
}
export default HeaderBody