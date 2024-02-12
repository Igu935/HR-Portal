import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom"
import CustomInput from "./CustomInput";

const AddUserModal = forwardRef(function AddUserModal({onAddUser},ref){
    const dialog = useRef()
    const [enteredUserData, setEnteredUserData] = useState({
        name:"",
        position:"",
        adress:"",
        city:"",
        state:"",
        country:"",
        phone:"",
        email:"",
        passport:"",
        birthDate:"",
    })

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    });


    function handleSave(event){

        event.preventDefault();

        const userData = {
            name: enteredUserData.name,
            position: enteredUserData.position,
            adress: enteredUserData.adress,
            city: enteredUserData.city,
            state: enteredUserData.state,
            country: enteredUserData.country,
            phone: enteredUserData.phone,
            email: enteredUserData.email,
            passport: enteredUserData.passport,
            birthDate: enteredUserData.birthDate,
        }

        onAddUser(userData);
        dialog.current.close()
    }

    function handleCancel(){
        dialog.current.close()
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setEnteredUserData((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        });
      };

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 bg-[#1e1e1e] p-4 rounded-md shadow-md w-1/2">
            <form method="dialog" className="mx-4 py-4 border-b border-stone-400" onSubmit={handleSave}>
                <CustomInput label="adress" type="text" onChange={handleInputChange} />
                <CustomInput label="city" type="text" onChange={handleInputChange} />
                <CustomInput label="State" type="text" onChange={handleInputChange} />
                <CustomInput label="Country" type="text" onChange={handleInputChange} />
                <CustomInput label="Phone" type="phone" onChange={handleInputChange} />
                <CustomInput label="E-mail" type="email" onChange={handleInputChange} />
                <CustomInput label="Passport" type="text" onChange={handleInputChange} />
                <CustomInput label="Birth Date" type="date" onChange={handleInputChange} />
            <button className="p-3 m-3 w-28 text-sx md:text-base rounded-md bg-[#d9d9d9] text-black hover:bg-[#F2F2F2] hover:font-semibold transition-all shadow-customShadow" type="submit">save</button>
            <button className="p-3 m-3" type="button" onClick={handleCancel}>cancel</button>
        </form>
        </dialog>, document.getElementById('modal-root')
    )
}) ;

export default AddUserModal;