'use client'
import { use } from "react";
import Banner from "../Components/Home/Banner/Banner";
import FriendsContainer from "../Components/Home/Friends/FriendsContainer";
import { useUser } from "../user-provider";

const HomePage = () => {

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-20">
            <Banner></Banner>
            <FriendsContainer></FriendsContainer>
        </div>
    );
};

export default HomePage;