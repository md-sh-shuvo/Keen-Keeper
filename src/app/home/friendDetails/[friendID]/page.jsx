import friendsData from '@/data/friends.json'
import Image from 'next/image';

const FriendDetailsPage = async ({params}) => {
    const {friendID} = await params
    // console.log(friendsData)
    // console.log(friendID)

    const friend = friendsData.find(frnd => frnd.id == friendID)
    // console.log(friend.name)

    return (
        <div className='max-w-[70%] mx-auto my-20 grid grid-cols-9 grid-rows-7 gap-3'>
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
            <div className='col-span-2 row-span-2 bg-white shadow-lg rounded-lg hover:scale-110 hover:shadow-2xl transition-all ease-in'></div>
            <div className='col-span-2 row-span-2 bg-white shadow-lg rounded-lg hover:scale-110 hover:shadow-2xl transition-all ease-in'></div>
            <div className='col-span-2 row-span-2 bg-white shadow-lg rounded-lg hover:scale-110 hover:shadow-2xl transition-all ease-in'></div>
            <div className='col-span-6 row-span-2 bg-white'></div>
            <div className='col-span-3 bg-white'></div>
            <div className='col-span-6 row-span-3 bg-white'></div>
            <div className='col-span-3 bg-white'></div>
            <div className='col-span-3 bg-white'></div>
        </div>
    );
};

export default FriendDetailsPage;