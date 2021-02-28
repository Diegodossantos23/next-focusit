import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { CountdownContext } from '../contexts/CountDownContext';

import styles from '../styles/components/ChallengeBox.module.css'

export const ChallengeBox = () => {
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const { resetCountDown} = useContext(CountdownContext)

    const handleChallengeSucceeded = () => {
        completeChallenge();
        resetCountDown();
    }

    const handleChallengeFailed = () => {
        resetChallenge();
        resetCountDown();
    }


    return( 
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Get {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>New Challenge</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                            >
                                Failed
                        </button>
                        
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                           >
                                Completed
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>complete a cycle to receive challenges</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level up"/>
                        level up by completing challenges.
                    </p>
                </div>
            )}
        </div>
    )
}