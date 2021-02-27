import styles from '../styles/components/CompletedChallenges.module.css'

export const CompletedChallenges = () => {
    return(
        <div className={styles.completedChallengesContainer}>
            <span>Completed Challenges</span>
            <span>5</span>
        </div>
    )
}