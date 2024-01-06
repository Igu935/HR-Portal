import CustomInput from "./CustomInput";

export default function UserDataForm({ userInfo, ...props }) {
   
    
    
    return (
        
        <>
            <CustomInput {...props} label="adress" type="text" value={userInfo.adress} />
            <CustomInput {...props} label="city" type="text"  value={userInfo.city} />
            <CustomInput {...props} label="State" type="text" value={userInfo.state} />
            <CustomInput {...props} label="Country" type="text" value={userInfo.country} />
            <CustomInput {...props} label="Phone" type="text" value={userInfo.phone} />
            <CustomInput {...props} label="E-mail" type="text" value={userInfo.mail} />
            <CustomInput {...props} label="Passport" type="text"  value={userInfo.passport} />
            <CustomInput {...props} label="Birth Date" type="text" value={userInfo.birthDate} />
        </>
    )
};