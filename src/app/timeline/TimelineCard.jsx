'use client'

import Image from 'next/image';
import React, { useContext } from 'react';
import { TimeLineContext } from '../TimelineProvider';

import callImg from '@/assets/call.png'
import textImg from '@/assets/text.png'
import videoImg from '@/assets/video.png'


const TimelineCard = ({timeline}) => {

    // console.log(timeline)
    let imgSrc
    if(timeline.checkInOption == 'Call') imgSrc =callImg
    else if(timeline.checkInOption == 'Text') imgSrc = textImg
    else imgSrc = videoImg

    const date = new Date(timeline.id)
    const formattedDate = date.toLocaleDateString('eng-US', {
        month : 'long',
        day : '2-digit',
        year : 'numeric'
    })
    
    return (
        <div className='text-[#1f2937df] bg-white p-4 rounded-xl border-2 border-gray-200 mt-6 flex gap-4 items-center'>
            <div>
                <Image src={imgSrc} width='40' height='40' alt='handshake image'></Image>
            </div>
            <div>
                <h3><span className='font-bold'>{timeline.checkInOption}</span> with {timeline.friend.name}</h3>
                <p>{formattedDate}</p>
            </div>
        </div>
    );
};

export default TimelineCard;