import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useShopContext } from '../../context/shopContext';
import classes from './timerBar.module.css';

export default function timerBar() {
  const { locale } = useRouter()
  const { state, funcs } = useShopContext();
  const [elapsed, setElapsed] = useState(0);
  const startTime = state?.session?.startTime;

  if (!startTime) return null;

  setTimeout(() => {
    setElapsed(elapsed + 1);
    if(state.stage == 'authorized') {
      setElapsed(0)
    }
  }, 1000);

  const diff = 300 - elapsed;
  const mins = Math.floor(diff / 60);
  const secs = diff - mins * 60;
  const barStyle = [classes.cont];

  if (mins < 1) barStyle.push(classes.warn);

  return (
    <div className={barStyle.join(' ')}>
      {state.stage != 'captured' && (
        <div className={classes.time}>
          {diff <= 0 ? (
            <span>{ locale === "EN" ? "Timed out!" : locale === "ES" ? "Desconectado!" : "" }</span>
          ) : (
            <span>
              { locale === "EN" ? "Time remaining" : locale === "ES" ? "Tiempo restante" : "" }: {mins} : {secs > 9 ? secs : '0' + secs}
            </span>
          )}
        </div>
      )}
      {state.stage == 'captured' && ""}
    </div>
  );
}
