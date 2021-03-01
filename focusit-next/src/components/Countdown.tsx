import { useContext} from 'react'
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/CountDown.module.css'

let countdownTimeout: NodeJS.Timeout;

export const Countdown  = () => {
    const {
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [SecondLeft, SecondRight] = String(seconds).padStart(2, '0').split('');

    return(
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{SecondLeft}</span>
                    <span>{SecondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                  <button 
                  disabled
                  className={`${styles.countDownButton}`}   
                  >
                       Ciclo encerrado
              </button>
            ) : (
                <>
                      {isActive ? (
                    <button 
                        type="button" 
                        className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                        onClick={resetCountdown}
                        >
                            Abandonar ciclo 
                    </button>
                ) : (
                    <button 
                        type="button" 
                        className={styles.countDownButton}
                        onClick={startCountdown}
                        >
                            Iniciar um ciclo   
                    </button>
                )}
          </>
            )}
        </div>
    )
}