import Image from "next/image";
import Link from "next/link";
import friendsData from '@/data/friends.json'

const FriendsContainer = () => {
    console.log(friendsData)
    return (
        <div className="max-w-[70%] mx-auto mt-10 pt-10 border-t-2 border-[#E9E9E9] text-center">
            <h1 className="font-semibold text-2xl text-[#1F2937] mb-4 text-start">Your Friends</h1>
            <div className="md:grid grid-cols-2 lg:grid-cols-4 gap-6">

                {
                    friendsData.map((friend, idx) =>
                        <div key={idx} className="cursor-pointer">
                            <Link href={`/home/friendDetails/${friend.id}`}>
                                <div className="bg-white rounded-lg shadow-lg p-8">
                                    <Image src={`${friend.picture}`} width='80' height='80' alt="" className="rounded-full mx-auto"></Image>
                                    <h1 className="text-[#1F2937] text-xl font-semibold">{friend.name}</h1>
                                    <p className="text-[#64748B] text-[12px]">{friend.days_since_contact}d ago</p>
                                    <p className="flex gap-2 justify-center items-center my-1.5">{friend.tags.map((tag, idx) => <span key={idx} className="bg-[#CBFADB] text-[#244D3F] text-[12px] font-medium py-1 px-3 rounded-full">{tag}</span>)}</p>
                                    <span className={`${friend.status === 'almost due' ? "bg-[#EFAD44]" : friend.status === 'overdue' ? "bg-[#EF4444]" : "bg-[#244D3F]"}  py-1 px-3 text-white rounded-full text-[12px] font-medium`}>{friend.status}</span>
                                </div>
                            </Link>

                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default FriendsContainer;