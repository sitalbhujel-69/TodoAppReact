import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import TodoContainer from './components/TodoContainer'
import TodoTitle from './components/TodoTitle'
import TodoInput from './components/TodoInput'
import TodoContent from './components/TodoContent'
import { createContext, useState } from 'react'
import EmptyMsg from './components/EmptyMsg'

export const Data = createContext();

function App() {

  let TaskList = ['buy a car','Dream big','Be a man']
  const[todo,setTodo] = useState(TaskList)
  const [prevTodo,setPrevTodo] = useState(TaskList)
  let newTodo , newTodo2;
  const handleAddvalue = (value)=>{
     newTodo = todo
     newTodo2 =prevTodo
   console.log(value)
   setTodo([...newTodo,value])
   setPrevTodo([...newTodo2,value])
   
  }
  const handleDeletevalue = (value)=>{
    newTodo = todo.filter(list=>list!==value);
    newTodo2 = prevTodo.filter(list=>list!==value)
    setPrevTodo(newTodo2)
    setTodo(newTodo)
  }

  const handleSearchvalue = (value)=>{
      if(typeof value == 'string'){
        console.log(typeof value)
        newTodo2 = prevTodo.filter(list=>list.includes(value));
        setTodo(newTodo2)
      }
      else if(typeof value == 'object'){
        console.log(value)
        setTodo([...value])
      }

    
  }
  return (
    <>
      <Data.Provider value={{todo,prevTodo,handleAddvalue,handleDeletevalue,handleSearchvalue}}>
      <TodoContainer>
        <TodoTitle/>
        <TodoInput handleAdd={handleAddvalue}/>
        {
          todo.length === 0 && <EmptyMsg/>
        }
        <TodoContent />
      </TodoContainer>
      </Data.Provider>
    </>
  )
}

export default App
