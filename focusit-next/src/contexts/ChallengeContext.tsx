import {createContext, ReactNode, useState} from'react'
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContexData{
    level:number;
    currentExperience:number;
    experienceToNextLevel:number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge:() => void;
    resetChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContexData);

export const ChallengesProvider = ({children}: ChallengesProviderProps) => {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    
    const [activeChallenge, setActiveChallenge] = useState(null)

    const levelUp = () => {
        setLevel(level + 1);
    }

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    const startNewChallenge = () => {
        const randomChallengesIndex = Math.floor( Math.random() * challenges.length);
        const challenge = challenges[randomChallengesIndex];
        setActiveChallenge(challenge);
    }

    const resetChallenge = () => {
        setActiveChallenge(null)
    }

    return (
        <ChallengesContext.Provider
         value={{
                level,
                currentExperience,
                experienceToNextLevel,
                challengesCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge
                }}>
            {children}
        </ChallengesContext.Provider>
    )
}