export default function Card({children, classes}){
    
    let cardClasses = "m-4 rounded-lg bg-[#1e1e1e] shadow-customShadow "

    cardClasses += classes
   
    return <div className={cardClasses}>
        {children}
    </div>
};