import friendsData from '@/data/friends.json'
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CheckIn from './CheckIn';


const FriendDetailsPage = async ({ params }) => {
    const { friendID } = await params
    // console.log(friendsData)
    // console.log(friendID)

    const friend = friendsData.find(frnd => frnd.id == friendID)
    // console.log(friend.name)

    if (!friend) {
        notFound();
    }

    const formattedDate = new Date(friend.next_due_date).toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
    })



    return (
        <div className='max-w-[90%] lg:max-w-[80%] mx-auto my-20 space-y-4 md:space-y-0 md:grid grid-cols-9 grid-rows-7 gap-3 text-black'>
            <div className='col-span-3 row-span-4 bg-white text-center p-6 rounded-sm shadow-lg '>
                <Image className='mx-auto rounded-full' src={`${friend.picture}`} width='100' height='100' alt='Friend Image'></Image>
                <h1 className='font-semibold text-black'>{friend.name}</h1>
                <div className='text-[12px] font-medium text-white bg-[#EF4444] w-fit rounded-full mx-auto px-2 py-0.5'>{friend.status}</div>
                {
                    friend.tags.map((tag, idx) => <div key={idx} className='inline mr-1 text-[12px] font-medium text-[#244D3F] bg-[#CBFADB] w-fit rounded-full mx-auto px-2 py-0.5 mt-1'>{tag}</div>)
                }
                <h3 className='text-[#64748B] font-medium text-[16px]/3.5 my-3'>{friend.bio}</h3>
                <p className='text-[#64748B] text-[14px]'>Preferred: {friend.email}</p>
            </div>
            <div className='col-span-2 row-span-2 bg-white shadow-lg rounded-lg  flex flex-col justify-center items-center py-3 md:py-0'>
                <h1 className='font-semibold text-3xl text-[#244D3F]'>{friend.days_since_contact}</h1>
                <p className='text-[18px] text-[#64748B]'>Day Since Contact</p>
            </div>
            <div className='col-span-2 row-span-2 bg-white shadow-lg rounded-lg  flex flex-col justify-center items-center py-3 md:py-0'>
                <h1 className='font-semibold text-3xl text-[#244D3F]'>{friend.goal}</h1>
                <p className='text-[18px] text-[#64748B]'>Goals (Days)</p>
            </div>
            <div className='col-span-2 row-span-2 bg-white shadow-lg rounded-lg  flex flex-col justify-center items-center py-3 md:py-0'>
                <h1 className='font-semibold text-xl lg:text-2xl text-[#244D3F]'>{formattedDate}</h1>
                <p className='text-[18px] text-[#64748B]'>Next Due</p>
            </div>
            <div className='col-span-6 row-span-2 bg-white shadow-lg rounded-lg  p-6'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-medium text-[#244D3F]'>Relationship Goal</h1>
                    <button className='py-1 px-4 border border-gray-300 text-sm bg-gray-100 rounded-lg cursor-pointer'>Edit</button>
                </div>
                <p className='text-sm text-[#64748B] lg:mt-4'>Connect every <span className='font-bold text-[#1F2937]'>{friend.goal} days</span></p>
            </div>


            <div className='col-span-3 hidden  bg-white md:flex justify-center items-center gap-2 text-[16px] text-[#1F2937] font-medium border border-gray-200 rounded-sm cursor-pointer shadow-sm hover:scale-105 hover:shadow-xl transition-all ease-in py-2 md:py-0'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M10.5 8.25h3l-3 4.5h3" />
                </svg>
                <p>Snooze 2 weeks</p>
            </div>


            <div className='col-span-6 row-span-3 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between'>
                <h1 className='text-[#244D3F] font-medium'>Quick Check-In</h1>
                <CheckIn friend={friend}></CheckIn>
            </div>


            <div className='col-span-3 md:hidden bg-white flex justify-center items-center gap-2 text-[16px] text-[#1F2937] font-medium border border-gray-200 rounded-sm cursor-pointer shadow-sm hover:scale-105 hover:shadow-xl transition-all ease-in py-2 md:py-0'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M10.5 8.25h3l-3 4.5h3" />
                </svg>
                <p>Snooze 2 weeks</p>
            </div>

            <div className='col-span-3 bg-white flex justify-center items-center gap-2 text-[16px] text-[#1F2937] font-medium border border-gray-200 rounded-sm cursor-pointer shadow-sm hover:scale-105 hover:shadow-xl transition-all ease-in py-2 md:py-0'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
                <p>Archive</p>
            </div>

            <div className='col-span-3 bg-white flex justify-center items-center gap-2 text-[16px] text-[#1F2937] font-medium border border-gray-200 rounded-sm cursor-pointer shadow-sm hover:scale-105 hover:shadow-xl transition-all ease-in py-2 md:py-0'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                <p>Delete</p>
            </div>
        </div>
    );
};

export default FriendDetailsPage;