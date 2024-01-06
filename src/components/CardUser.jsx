import Card from "./UI/Card";
import ProfileImg from "./ProfileImg";

export default function CardUser({profilePhoto, name, position, onSelectUser, id}){
    
    const btnClasses = "p-1 w-28 text-sx md:text-base rounded-md bg-[#d9d9d9] text-black hover:bg-[#F2F2F2] hover:font-semibold transition-all shadow-customShadow"

    return (
        <Card classes={"flex"}>
            
            <div className="flex gap-1 p-2 w-full justify-between">
                <div>
                    <p className="p-2">{name}</p>
                    <p className="p-2">{position}</p>
                </div>
                <p className="self-end p-2">
                    <button className={btnClasses} onClick={() => onSelectUser(id)}>view »</button>
                </p>
            </div>
        </Card>

    )
};