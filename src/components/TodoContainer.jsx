import React from "react";

const TodoContainer = ({children}) => {
  return (
    <>
      <div className="container Container">{children}</div>
    </>
  );
};

export default TodoContainer;
