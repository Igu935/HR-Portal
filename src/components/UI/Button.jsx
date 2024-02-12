export default function Button({ text, classes, ...props }) {

    if(text === "cancel"){
        classes += " bg-transparent text-white"
    }
    let btnClass = "p-2 m-4 w-32 text-sx md:text-base rounded-lg bg-[#d9d9d9] text-black shadow-btnShadow hover:shadow-btnShadow2 hover:font-semibold transition-all hover:duration-300 duration-300 " + classes

    return (
    <button
        className={btnClass}
        {...props}>{text}</button>)

};