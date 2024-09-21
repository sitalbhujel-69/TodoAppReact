import React, { useContext} from 'react'
import { Data } from "../App";
const TodoLists = ({children}) => {

  const {handleDeletevalue} = useContext(Data);


  const handleDeleteButton = ()=>{
    handleDeletevalue(children)
  }
  
  return (
    <>
      <li className="list-group-item lists"><p>{children}</p><button type="button" className="btn btn-outline-danger" onClick={handleDeleteButton}>Delete</button></li>
    </>
  )
}

export default TodoLists