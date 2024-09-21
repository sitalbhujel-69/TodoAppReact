import React, { useContext, useRef, useState } from "react";
import { Data } from "../App";

const TodoInput = () => {
   const textInput = useRef();
   const {handleAddvalue,handleSearchvalue,prevTodo} = useContext(Data)

   const [val,setval] = useState('Search')

   const handleAddbutton = ()=>{
    let value = textInput.current.value;
    if(value!==''){
     handleAddvalue(value)
    }
     textInput.current.value = '';
   }
   const prevVal = prevTodo
   const handleSearchbutton = ()=>{
     val === 'Search' ? setval('Cancel'):setval('Search')
    let value = textInput.current.value;
    if(value!=='' && val==='Search'){
      handleSearchvalue(value);
    }
    else if(val==='Cancel'){
      handleSearchvalue(prevVal)
      console.log(typeof prevVal)
      console.log('clicked')
    }
    textInput.current.value = '';
    console.log(val)
   }

  return (
    <>
    <div className="input-group">
  <input type="text" className="form-control" placeholder="Add Todo Here" ref={textInput}/>
  <button className="btn btn-outline-secondary btn-red" type="button" onClick={handleAddbutton}>Add</button>
  <button className="btn btn-outline-secondary btn-blue" type="button" onClick={handleSearchbutton}>{val}</button>
</div>
    </>
  );
};

export default TodoInput;
