import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css'

let countDownTimeout: NodeJS.Timeout;

export const CountDown = () => {
    const {
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountDown,
            resetCountDown
        } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [SecondLeft, SecondRight] = String(seconds).padStart(2, '0').split('');


    // const startCountDown = () => {
    //     setIsActive(true);
    // }

    // const resetCountDown = () => {
    //     clearTimeout(countDownTimeout);
    //     setIsActive(false);
    //     setTime(25 * 60);
    // }
    

    // useEffect(() => {
    //     if(isActive && time > 0) {
    //         countDownTimeout = setTimeout(() => {
    //             setTime(time - 1)
    //         }, 1000)
    //     } else if(isActive && time === 0 ) {
    //         setHasFinished(true);
    //         setIsActive(false);
    //         startNewChallenge()
    //     }


    // }, [isActive, time])

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
                      Finished cycle
              </button>
            ) : (
                <>
                      {isActive ? (
                    <button 
                        type="button" 
                        className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                        onClick={resetCountDown}
                        >
                            Stop cycle  
                    </button>
                ) : (
                    <button 
                        type="button" 
                        className={styles.countDownButton}
                        onClick={startCountDown}
                        >
                            Start a cycle     
                    </button>
                )}
          </>
            )}
        </div>
    )
}