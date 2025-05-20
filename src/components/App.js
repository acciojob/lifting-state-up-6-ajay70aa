
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {

  const [todos, setTodos] = useState([
    {id: 1, text: "Learn React", complete: false},
    {id: 2, text: "Build a React App", complete: false},
    {id: 3, text: "Deploy the React App", complete: false},
  ])
  const handleComplete = (id) => {
    setTodos((prev)=>
      prev.map((item)=>{
        return (
          item.id === id ? {...item, complete: !item.complete} : item
        )
      })
    )
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <Child todoList={todos} completed={handleComplete}/>
    </div>
  )
}

export default App
