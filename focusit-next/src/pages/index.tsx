import Head from 'next/head'

import {ExperienceBar} from '../components/ExperiencieBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown'

import { ChallengeBox } from '../components/ChallengeBox'

import styles from '../styles/pages/Home.module.css'
import { CountdownProvider } from '../contexts/CountDownContext'



const Home = () => {
  return (
    <div className={styles.container}>

      <Head>
          <title>Start | focus.it</title>
      </Head>

     <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile/>
            <CompletedChallenges/>
            <CountDown/>
          </div>
          <div>
            <ChallengeBox/>
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
export default Home
