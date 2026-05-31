'use client'

import React, { createContext, useState } from 'react';

export const TimeLineContext = createContext(null)


const TimelineProvider = ({children}) => {
    const [checkInOption, setCheckInOption] = useState(null)
    const [friend, setFriend] = useState(null)
    const [timelineArray , setTimelineArray] = useState([])
    return (
        <TimeLineContext.Provider
            value={
                {
                    checkInOption,
                    setCheckInOption,
                    friend,
                    setFriend,
                    timelineArray,
                    setTimelineArray
                }
            }
        >
            {children}
        </TimeLineContext.Provider>
    );
};

export default TimelineProvider;