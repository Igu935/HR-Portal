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
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md w-1/2">
            <form method="dialog" className="mx-4 py-4 border-b border-stone-400" onSubmit={handleSave}>
            <CustomInput label={"Name"} type="text" required name="name" onChange={handleInputChange} />
            <CustomInput label={"Position"} type="text" required name="position" onChange={handleInputChange}  />
            <CustomInput label={"Adress"} type="text" required name="adress" onChange={handleInputChange} />
            <CustomInput label={"City"} type="text" required name="city" onChange={handleInputChange} />
            <CustomInput label={"State"} type="text" required name="state" onChange={handleInputChange} />
            <CustomInput label={"Country"} type="text" required name="country" onChange={handleInputChange} />
            <CustomInput label={"Phone"} type="phone" required name="phone" onChange={handleInputChange} />
            <CustomInput label={"E-mail"} type="email" required name="email" onChange={handleInputChange} />
            <CustomInput label={"Passport"} type="text" required name="passport" onChange={handleInputChange} />
            <CustomInput label={"Birth date"} type="date" required name="birthDate" onChange={handleInputChange} />
            <button className="p-3 m-3" type="submit">save</button>
            <button className="p-3 m-3" type="button">cancel</button>
        </form>
        </dialog>, document.getElementById('modal-root')
    )
}) ;

export default AddUserModal;