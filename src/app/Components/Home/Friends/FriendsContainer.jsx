import { useUser } from "@/app/user-provider";
import { use } from "react";

const FriendsContainer = () => {
    const {userPromise} = useUser()
    const friendsData = use(userPromise)
    // console.log(friendsData)
    return (
        <div>
            
        </div>
    );
};

export default FriendsContainer;