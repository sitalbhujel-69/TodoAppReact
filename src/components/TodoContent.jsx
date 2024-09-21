import React, { useContext } from "react";
import TodoLists from "./TodoLists";
import { Data } from "../App";
const TodoContent = () => {
  const {todo} = useContext(Data);
  return (
    <>
      <ul className="list-group list-group-flush list-style">
        {todo.map(list=><TodoLists key={list}>{list}</TodoLists>)}
      </ul>
    </>
  );
};

export default TodoContent;
