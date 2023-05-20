import './App.css'

function MyButton({value,handleClick,className}){
    return(
        <>
            <button onClick={handleClick} className={className + ' button'}>{value}</button>
        </>
    )
}

export default MyButton