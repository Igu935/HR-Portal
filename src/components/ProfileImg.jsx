export default function ProfileImg({profilePhoto}){
    return <div className="w-28 flex ">
    <img src={profilePhoto} alt="" className="object-cover rounded-lg"/>
</div>
};