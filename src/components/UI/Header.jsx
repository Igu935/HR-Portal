export default function Header(){
    return (
        <header className="h-24 shadow-customShadow p-4 bg-[#101010] flex justify-between items-center">
            <div>
                <h2 className="text-3xl font-bold">Company Name</h2>
                <p>Human Resources</p>
            </div>
            
            <div className="px-2 flex flex-col gap-2 justify-center items-center ">
                <img src="../src/assets/user-icon.png" alt="" className="rounded-full w-11" />
                <p>admin</p>
            </div>
        </header>
    )
};