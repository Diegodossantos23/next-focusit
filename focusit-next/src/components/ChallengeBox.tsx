import styles from '../styles/components/ChallengeBox.module.css'

export const ChallengeBox = () => {
    const hasActiveChallenge = true
    
    return( 
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div/>
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