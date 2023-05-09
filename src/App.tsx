import React, { useCallback, useState } from 'react';
import InputField from './components/InputField';
import {Todo} from './model'
import TodoList from './components/TodoList'

import './App.css';
// let name:string
// let hobbies:string[]
// let isStudent:boolean;
// let role:[number,string] //contains one number and on string tuple
// let  printName:(name:string)=>void
//object
// type Person={
//   name:string,
//   age:number
// }

//it works same as type working when we are going to declare object
// interface Person{
//   name:string,
//   age:number
// }
// interface Guy extends Person{
//   name:string,
//   age:number
// }



// let person:Person={
//   name:'Piyush',
//   age:12
// }
// let lotsofPeople:Person[]

const App:React.FC=()=> {
  const[todo,setTodo]=useState <string>('')
  const [todos,setTodos]=useState<Todo[]>([])
  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo('')
    }
  }
  console.log(todos);
  
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
     <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
     <TodoList todos={todos} setTodos={setTodos}/>
     
    </div>
  );
}

export default App;
