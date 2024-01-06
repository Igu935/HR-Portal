
import CardUser from "./CardUser"
export default function({userData, profilePhoto, onSelectedUser}){


    return (
        <ul>
            {userData.map((user) => {
                return (
                    <li key={user.id}>
                        <CardUser profilePhoto={profilePhoto} name={user.name} position={user.position} onSelectUser={onSelectedUser} id={user.id}/>
                    </li>
                )
            })}
        </ul>
    )
};