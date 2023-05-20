import './App.css'

function Result({value}){
    return(
        <>
            <input type="text" value={value} className='result' disabled />
        </>
    )
}

export default Result;