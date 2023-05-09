import React from 'react'
import './styles.css'
import { useRef } from 'react'
interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e:React.FormEvent)=>void
}
const InputField = ({todo,setTodo,handleAdd}:Props) => {
    const inputRef=useRef<HTMLInputElement>(null)
  return (
    <div>
      <form className='input' 
      onSubmit={(e)=>{handleAdd(e)
    inputRef.current?.blur()}}>
        <input type='input' placeholder='Enter a task' className='input-box' 
        ref={inputRef}
        value={todo}
        onChange={(e)=>{
            setTodo(e.target.value)
        }}></input>
        <button className='input-submit' type='submit'>Go</button>
      </form>
    </div>
  )
}

export default InputField
