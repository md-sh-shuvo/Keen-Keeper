import friendsData from '@/data/friends.json'

const FriendDetailsPage = async ({params}) => {
    const {friendID} = await params
    // console.log(friendsData)
    // console.log(friendID)

    const friend = friendsData.find(frnd => frnd.id == friendID)
    // console.log(friend.name)

    return (
        <div className='max-w-[70%] mx-auto my-20 grid grid-cols-9 grid-rows-7 gap-3'>
            <div className='col-span-3 row-span-4 bg-white'>
                    
            </div>
            <div className='col-span-2 row-span-2 bg-white'></div>
            <div className='col-span-2 row-span-2 bg-white'></div>
            <div className='col-span-2 row-span-2 bg-white'></div>
            <div className='col-span-6 row-span-2 bg-white'></div>
            <div className='col-span-3 bg-white'>HELLO</div>
            <div className='col-span-6 row-span-3 bg-white'></div>
            <div className='col-span-3 bg-white'></div>
            <div className='col-span-3 bg-white'></div>
        </div>
    );
};

export default FriendDetailsPage;