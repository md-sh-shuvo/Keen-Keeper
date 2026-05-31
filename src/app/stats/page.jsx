
import FriendshipAnalyticsChart from './FriendshipAnalyticsChart';

const StatsPage = () => {

   
    return (
        <div className='bg-[#F8FAFC] min-h-screen max-w-7xl px-[5%] md:px-[10%] lg:px-[15%] mx-auto my-6 md:my-12 lg:my-20 text-black'>
            <h3 className='font-bold text-[#1F2937] text-[20px] md:text-[30px] lg:text-[40px] mb-6'>Friendship Analytics Chart</h3>
            <div className='bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200'>
                <h1>By Interaction Type</h1>
                <FriendshipAnalyticsChart></FriendshipAnalyticsChart>
            </div>
        </div>
    );
};

export default StatsPage;