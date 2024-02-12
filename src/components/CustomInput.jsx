import { forwardRef } from "react"

const CustomImput = forwardRef(function CustomInput({label, ...props}, ref){

    let inputClasses = "rounded w-full py-2 px-4 "
    if(props.disabled === true){
        inputClasses += "text-white"
    } else if (props.disabled === ""){
        inputClasses += "text-black"
    }

    
    
    return (
        <p className="p-2 capitalize">
            <label className="block pb-1" >{label}:</label>
            <input {...props} className={inputClasses} ref={ref} />
        </p>
    )
});

export default CustomImput;