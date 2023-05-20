import {useState } from 'react';
import './App.css';
import MyButton from './components/MyButton';
import Result from './components/Result';

function App() {

  const [result,setResult] = useState(0)
  const [previousResult,setPreviousResult] = useState(0)
  const [operation,setOperation] = useState('')
  return (
    <div className='calculator'>
      <Result value={result}/>
       <div className='fourthLine'>
        <MyButton value={'AC'} handleClick={(evt)=>{
          setResult(0)
          setPreviousResult(0)
          setOperation('')
        }}/>
        <MyButton value={'+/-'} handleClick={(evt)=>{
          setOperation('')
          setResult(-result)


        }} />
        <MyButton value={'%'} handleClick={(evt)=>{
          setResult(result / 100)
          setOperation('')
        }} />
        <MyButton value={'/'} handleClick={(evt)=>{
          setPreviousResult(result)
          setResult(0)
          setOperation('/')
        }} className={'operations'} />
      </div>
       <div className='fourthLine'>
        <MyButton value={7} handleClick={(evt)=>{
              if(result !== 0) setResult(+(String(result) + '7'))
              else setResult(7)
        }}/>
        <MyButton value={8} handleClick={(evt)=>{
              if(result !== 0) setResult(+(String(result) + '8'))
              else setResult(8)
        }} />
        <MyButton value={9} handleClick={(evt)=>{
              if(result !== 0) setResult(+(String(result) + '9'))
              else setResult(9)
        }} />
        <MyButton value={'*'} handleClick={(evt)=>{
          setPreviousResult(result)
          setResult(0)
          setOperation('*')
        }} className={'operations'} />
      </div>
       <div className='thirdLine'>
        <MyButton value={4} handleClick={(evt)=>{
              if(result !== 0) setResult(+(String(result) + '4'))
              else setResult(4)
        }}/>
        <MyButton value={5} handleClick={(evt)=>{
              if(result !== 0) setResult(+(String(result) + '5'))
              else setResult(5)
        }} />
        <MyButton value={6} handleClick={(evt)=>{
              if(result !== 0) setResult(+(String(result) + '6'))
              else setResult(6)
        }} />
        <MyButton value={'-'} handleClick={(evt)=>{
          setPreviousResult(result)
          setResult(0)
          setOperation('-')
        }} className={'operations'} />
      </div>
      <div className='secondLine'>
        <MyButton value={1} handleClick={(evt)=>{
           if(result !== 0)setResult(+(String(result) + '1'))
          else setResult(1)
        }}/>
        <MyButton value={2} handleClick={(evt)=>{
          if(result !== 0) setResult(+(String(result) + '2'))
          else setResult(2)
        }} />
        <MyButton value={3} handleClick={(evt)=>{
          if(result !== 0) setResult(+(String(result) + '3'))
          else setResult(3)
        }} />
        <MyButton value={'+'} handleClick={(evt)=>{
          setPreviousResult(result)
          setResult(0)
          setOperation('+')
        }} className={'operations'} />
      </div>
      <div className='firstLine'>
        <MyButton value={0} handleClick={(evt)=>{
          if(result !== 0) setResult(+(String(result) + '0'))
          else setResult(0)
        }} className={'zero'} />
        <MyButton value={'.'} handleClick={(evt)=>{
          setResult(String(result) + '.')
        }} />
        <MyButton value={'='} handleClick={(evt)=>{
          if(operation === '+'){
            setPreviousResult(result)
            setResult(previousResult + result)
            setOperation('')
          }
          else if(operation === '-'){
            setPreviousResult(result)
            setResult(previousResult - result)
            setOperation('')

          } 
          else if(operation === '*'){
            setPreviousResult(result)
            setResult(previousResult * result)
            setOperation('')

          } 
          else if(operation === '/'){
            setPreviousResult(result)
            setResult(previousResult / result)
            setOperation('')

          }
        }} className={'operations'} />
      </div>
    </div>
  );
}

export default App;
