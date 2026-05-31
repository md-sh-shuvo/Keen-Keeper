import friendsData from '@/data/friends.json'
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const FriendDetailsPage = async ({params}) => {
    const {friendID} = await params
    // console.log(friendsData)
    // console.log(friendID)

    const friend = friendsData.find(frnd => frnd.id == friendID)
    // console.log(friend.name)

    if(!friend){
        notFound();
    }
    
    const formattedDate = new Date(friend.next_due_date).toLocaleDateString('en-US', {
        month : 'long',
        day : '2-digit',
        year : 'numeric'
    })

   

    return (
        <div className='max-w-[90%] lg:max-w-[80%] mx-auto my-20 space-y-4 md:grid grid-cols-9 grid-rows-7 gap-3 text-black'>
            <div className='col-span-3 row-span-4 bg-white text-center p-6 rounded-sm shadow-lg hover:scale-110 hover:shadow-2xl transition-all ease-in'>
                    <Image className='mx-auto rounded-full' src={`${friend.picture}`} width='100' height='100' alt='Friend Image'></Image>
                    <h1 className='font-semibold text-black'>{friend.name}</h1>
                    <div className='text-[12px] font-medium text-white bg-[#EF4444] w-fit rounded-full mx-auto px-2 py-0.5'>{friend.status}</div>
                    {
                        friend.tags.map((tag, idx) => <div key={idx} className='inline mr-1 text-[12px] font-medium text-[#244D3F] bg-[#CBFADB] w-fit rounded-full mx-auto px-2 py-0.5 mt-1'>{tag}</div>)
                    }
                    <h3 className='text-[#64748B] font-medium text-[16px]/3.5 my-3'>{friend.bio}</h3>
                    <p className='text-[#64748B] text-[14px]'>Preferred: {friend.email}</p>
            </div>
            <div className='col-span-2 row-span-2 bg-white shadow-lg rounded-lg hover:scale-110 hover:shadow-2xl transition-all ease-in flex flex-col justify-center items-center py-3 md:py-0'>
                <h1 className='font-semibold text-3xl text-[#244D3F]'>{friend.days_since_contact}</h1>
                <p className='text-[18px] text-[#64748B]'>Day Since Contact</p>
            </div>
            <div className='col-span-2 row-span-2 bg-white shadow-lg rounded-lg hover:scale-110 hover:shadow-2xl transition-all ease-in flex flex-col justify-center items-center py-3 md:py-0'>
                <h1 className='font-semibold text-3xl text-[#244D3F]'>{friend.goal}</h1>
                <p className='text-[18px] text-[#64748B]'>Goals (Days)</p>
            </div>
            <div className='col-span-2 row-span-2 bg-white shadow-lg rounded-lg hover:scale-110 hover:shadow-2xl transition-all ease-in flex flex-col justify-center items-center py-3 md:py-0'>
                <h1 className='font-semibold text-xl lg:text-2xl text-[#244D3F]'>{formattedDate}</h1>
                <p className='text-[18px] text-[#64748B]'>Next Due</p>
            </div>
            <div className='col-span-6 row-span-2 bg-white shadow-lg rounded-lg hover:scale-110 hover:shadow-2xl transition-all ease-in p-6'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-medium text-[#244D3F]'>Relationship Goal</h1>
                    <button className='py-1 px-4 border border-gray-300 text-sm bg-gray-100 rounded-lg cursor-pointer'>Edit</button>
                </div>
                <p className='text-sm text-[#64748B] lg:mt-4'>Connect every <span className='font-bold text-[#1F2937]'>{friend.goal} days</span></p>
            </div>
            <div className='col-span-3 bg-white'></div>
            <div className='col-span-6 row-span-3 bg-white'></div>
            <div className='col-span-3 bg-white'></div>
            <div className='col-span-3 bg-white'></div>
        </div>
    );
};

export default FriendDetailsPage;