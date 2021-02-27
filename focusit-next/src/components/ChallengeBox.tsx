import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/ChallengeBox.module.css'

export const ChallengeBox = () => {
    const {activeChallenge} = useContext(ChallengesContext);

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
                            >
                                Failed
                        </button>
                        
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
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