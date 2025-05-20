import React from 'react'

const Child = (props) => {
  
  return (
    <div>
      <h2>Child Component</h2>
      {props.todoList.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.text}</p>
            {item.complete ? " ": <button onClick={() => props.completed(item.id)}>complete</button>}
          </div>
        )
      })}
    </div>
  )
}

export default Child