import Card from "./UI/Card"
import ProfileImg from "./ProfileImg"
import UserDataForm from "./UserDataForm"
import { useState } from "react"
export default function SelectedUser({userInfo, profilePhoto}){

   



    return(
        <Card>
            <div className="mx-4 py-4 flex border-b border-stone-400">
                <div className="px-2">
                    <h2 className="text-3xl py-2">{userInfo.name}</h2>
                    <p className="text-stone-500 ">{userInfo.position}</p>
                </div>
            </div>
            <div className="mx-4 py-4 border-b border-stone-400">
            <UserDataForm userInfo={userInfo} disabled />
            </div>
            <div>
                <button
                    disabled
                    className="p-2 m-4 w-28 text-sx md:text-base rounded-md bg-[#d9d9d9] text-black hover:bg-[#BCBCBC] hover:font-semibold transition-all shadow-customShadow cursor-not-allowed"
                    >edit</button>
            </div>

        </Card>
    )
};
