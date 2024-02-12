import Card from "./UI/Card"
import ProfileImg from "./ProfileImg"
import { useState, useRef } from "react"
import UserDataForm from "./UserDataForm"
import Button from "./UI/Button"
export default function SelectedUser({userInfo, profilePhoto}){

    const [isEdit, setIsEdit] = useState(false)


    function saveHandler(){

    };


    function handleEdit(){
        setIsEdit(true);
    }

    function handleCancel(){
        setIsEdit(false)
        
    }



    return (
        <Card>
            <div className="mx-4 py-4 flex border-b border-stone-400">
                <div className="px-2">
                    <h2 className="text-3xl py-2">{userInfo.name}</h2>
                    <p className="text-stone-500 ">{userInfo.position}</p>
                </div>
            </div>
            <div className="mx-4 py-4 border-b border-stone-400">
                <UserDataForm
                    disabled={isEdit ? "" : true}
                    userInfo={userInfo}
                    required={isEdit ? true : ""}
                    isEdit={isEdit} >
                    <Button type="button" text="edit" onClick={handleEdit} classes={isEdit && "hidden"}/>
                    <Button type="button" text="save changes" onClick={saveHandler} classes={!isEdit && "hidden"}/>
                    <Button type="button" text="cancel" onClick={handleCancel} classes={!isEdit && "hidden"}/>
                </UserDataForm>

            </div>
        </Card>
    )
};
