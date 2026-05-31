'use client'


import { useContext } from "react";
import TimelineCard from "./TimelineCard";
import { TimeLineContext } from "../TimelineProvider";




const TimelinePage = () => {

    const {timelineArray} = useContext(TimeLineContext)

    return (
        <div className='bg-[#F8FAFC] min-h-screen max-w-7xl px-[5%] md:px-[10%] lg:px-[15%] mx-auto my-6 md:my-12 lg:my-20'>
            <h3 className='font-bold text-[20px] md:text-[30px] lg:text-[40px] text-[#1F2937]'>Timeline</h3>


            <select name='filterTimeline' className='pl-2 py-1 pr-24 border-2 border-gray-200 rounded-lg text-gray-500'>
                <option value=''>Filter Timeline</option>
                <option value='call'>Call</option>
                <option value='text'>Text</option>
                <option value='video'>Video</option>
            </select>
            

            {
                timelineArray.map(timeline => <TimelineCard key={timeline.id} timeline={timeline}></TimelineCard>)
            }
            {/* <div id="timelineContainer">
                <TimelineCard></TimelineCard>
            </div> */}

        </div>
    );
};

export default TimelinePage;