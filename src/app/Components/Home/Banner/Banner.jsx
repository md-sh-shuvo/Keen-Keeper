import SummaryCard from "./SummaryCard";


const Banner = () => {
    return (
        <div className="text-center">
            <h1 className="font-bold text-5xl text-[#1F2937]">Friends to keep close in your life</h1>
            <p className="text-[#64748B] mt-4 mb-8 w-[30%] mx-auto">Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>
            <button className="py-3 px-4 bg-[#244D3F] rounded-sm font-semibold text-white flex mx-auto gap-1 cursor-pointer">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </span>
                Add a Friend</button>

            <SummaryCard></SummaryCard>
        </div>
    );
};

export default Banner;