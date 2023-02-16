import React,{ useState,useEffect} from 'react'

import {Wrapper,TimeBlock} from './style';

const TimerSection = () => {
    const [remainingTime, setRemainingTime] = useState(60 * 60 * 24 * 4.5);

    useEffect(() => {
        const interval = setInterval(() => { setRemainingTime(prev => prev - 1) }, 1000);
        return () => { clearInterval(interval) }
    }, []);


    const numberAsToDigits = (number) => {
        if (number < 9 && number >= 0) {
            return `0${number}`;
        }
        return `${number}`
    }

    const getDays = () => {
        return numberAsToDigits(Math.floor(remainingTime / (3600 * 24)));
    }

    const getHours = () => {
        return numberAsToDigits(Math.floor(remainingTime % (3600 * 24) / 3600));
    }

    const getMinutes = () => {
        return numberAsToDigits(Math.floor(remainingTime % 3600 / 60));
    }

    const getSeconds = () => {
        return numberAsToDigits(Math.floor(remainingTime % 60));
    }



    return (
        <Wrapper>
            <TimeBlock>
                <span>{getDays()}</span>
                <span>Days</span>
            </TimeBlock>
            <TimeBlock>
                <span>{getHours()}</span>
                <span>Hour</span>
            </TimeBlock>
            <TimeBlock>
                <span>{getMinutes()}</span>
                <span>Min</span>
            </TimeBlock>
            <TimeBlock>
                <span>{getSeconds()}</span>
                <span>Sec</span>
            </TimeBlock>
        </Wrapper>
    )
}

export default TimerSection