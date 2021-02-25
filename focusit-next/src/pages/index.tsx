import {ExperienceBar} from '../components/ExperiencieBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'


import styles from '../styles/pages/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>

     <ExperienceBar />
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
export default Home
