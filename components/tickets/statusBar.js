import { useShopContext } from '../../context/shopContext';
import classes from './statusBar.module.css'

export default function statusBar() {
    const { state, funcs } = useShopContext()
    // console.log("state error", state)

    if (!state.errorMsg) return null;
    
    //TODO: use array of classes to animate bar appearing/disappearing
    return (
        <div className={classes.cont}>
            {state.errorMsg}
        </div>
    );
}