
const SummaryCard = () => {
    return (
        <div className="md:grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-[70%] mx-auto mt-10"> 
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-[#244D3F] text-3xl font-semibold">10</h1>
                <p className="text-[#64748B]">Total Friends</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-[#244D3F] text-3xl font-semibold">10</h1>
                <p className="text-[#64748B]">On Track</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-[#244D3F] text-3xl font-semibold">10</h1>
                <p className="text-[#64748B]">Need Attention</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-[#244D3F] text-3xl font-semibold">10</h1>
                <p className="text-[#64748B]">Interactions This Months</p>
            </div>
        </div>
    );
};

export default SummaryCard;