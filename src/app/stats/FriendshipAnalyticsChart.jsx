"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#7C3AED", "#1F5B4A", "#34A853"];

import React, { useContext } from 'react';
import { TimeLineContext } from "../TimelineProvider";

const FriendshipAnalyticsChart = () => {
    
    const { timelineArray } = useContext(TimeLineContext)
    const numberOfCall = timelineArray.filter(timeline => timeline.checkInOption == 'Call').length
    const numberOfText = timelineArray.filter(timeline => timeline.checkInOption == 'Text').length
    const numberOfVideo = timelineArray.filter(timeline => timeline.checkInOption == 'Video').length
    // console.log(numberOfCall)
    
    const data = [
        { name: "Call", value: numberOfCall },
        { name: "Text", value: numberOfText },
        { name: "Video", value: numberOfVideo },
    ];

    return (
        <div className="w-full h-75">
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={60}
                        outerRadius={90}
                        dataKey="value"
                        paddingAngle={5}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FriendshipAnalyticsChart;