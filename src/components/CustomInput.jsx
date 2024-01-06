export default function CustomInput({label, ...props}){
    
    return (
        <p className="p-2 capitalize">
            <label className="block pb-1" >{label}:</label>
            <input {...props} className=" rounded w-full py-2 px-4 text-[#d9d9d9] " />
        </p>
    )
};