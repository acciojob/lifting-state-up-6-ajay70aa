import React from 'react'

const Child = (props) => {
  const {todoList, completed} = props
  return (
    <div>
      <h2>Child Component</h2>
      {todoList.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.text}</p>
            {item.complete ? " ": <button onClick={() => completed(item.id)}>complete</button>}
          </div>
        )
      })}
    </div>
  )
}

export default Child