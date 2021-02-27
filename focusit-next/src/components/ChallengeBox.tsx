import styles from '../styles/components/ChallengeBox.module.css'

export const ChallengeBox = () => {
    const hasActiveChallenge = true
    
    return( 
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div> className={styles.challengeActive}
                    <header>Get 400xp</header>

                    <main>
                        <img src="icons/body.svg"/>
                        <strong>New Challenge</strong>
                        <p>get up and go take some water.</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailButton}
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