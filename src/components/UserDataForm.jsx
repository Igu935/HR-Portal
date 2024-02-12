import CustomInput from "./CustomInput";
import { useState } from "react";

export default function UserDataForm({ userInfo, isEdit, children, ...props }) {

 
    const [editedUserData, setEditedUserData] = useState({
        adress: userInfo.adress,
        city: userInfo.city,
        state: userInfo.state,
        country: userInfo.country,
        phone: userInfo.phone,
        email: userInfo.email,
        passport: userInfo.passport,
        birthDate: userInfo.birthDate,
    })

    
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setEditedUserData((prevState) => {
            
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    console.log(editedUserData.adress, userInfo.adress)

    return (
        <>
            <CustomInput {...props} label="adress" type="text" name="adress" value={isEdit ? editedUserData.adress: userInfo.adress} onChange={handleInputChange} />
            <CustomInput {...props} label="city" type="text" name="city" value={isEdit ? editedUserData.city: userInfo.city} onChange={handleInputChange} />
            <CustomInput {...props} label="State" type="text" name="state" value={isEdit ? editedUserData.state: userInfo.state} onChange={handleInputChange} />
            <CustomInput {...props} label="Country" type="text" name="country" value={isEdit ? editedUserData.country: userInfo.country} onChange={handleInputChange} />
            <CustomInput {...props} label="Phone" type="phone" name="phone" value={isEdit ? editedUserData.phone: userInfo.phone} onChange={handleInputChange} />
            <CustomInput {...props} label="E-mail" type="email" name="email" value={isEdit ? editedUserData.email: userInfo.email} onChange={handleInputChange} />
            <CustomInput {...props} label="Passport" type="text" name="passport" value={isEdit ? editedUserData.passport: userInfo.passport} onChange={handleInputChange} />
            <CustomInput {...props} label="Birth Date" type="date" name="birthDate" value={isEdit ? editedUserData.birthDate: userInfo.birthDate} onChange={handleInputChange} /> 
            <div>
                {children}
            </div>
        </>
    )
};