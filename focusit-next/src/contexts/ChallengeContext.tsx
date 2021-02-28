import {createContext, ReactNode, useEffect, useState} from'react'
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
    completeChallenge: () => void;
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

    useEffect(() => {
        Notification.requestPermission;
    }, [] );


    const startNewChallenge = () => {
        const randomChallengesIndex = Math.floor( Math.random() * challenges.length);
        const challenge = challenges[randomChallengesIndex];
        
        setActiveChallenge(challenge);
        
        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted') {
            new Notification('New Challenge 🎉', {
                body: `Worth ${challenge.amount}xp!` 
            })
        }
    }

    const resetChallenge = () => {
        setActiveChallenge(null);
    }

    const completeChallenge = () => {
        if(!activeChallenge){
            return;
        }

        const {amout} = activeChallenge;


        let finalExperience = currentExperience + amout;

        if(finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience / experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1)
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
                resetChallenge,
                completeChallenge
                }}>
            {children}
        </ChallengesContext.Provider>
    )
}