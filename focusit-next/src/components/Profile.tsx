import styles from '../styles/components/Profile.module.css'

export const Profile = () => {
    return(
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHFJs7lwBgIYg/profile-displayphoto-shrink_200_200/0/1614124897029?e=1619654400&v=beta&t=gGpkGmpzjYeq65C1qDHOSom3CYwqAWXPFHSwhBr87yM" alt="Diego dos Santos Rosa"/>
            <div>
                <strong>Diego dos Santos Rosa</strong>
                <p>
                    <img 
                        src="icons/level.svg"
                        alt="level icon"
                    />
                    Level 1
                </p>
            </div>
        </div>
    )
}