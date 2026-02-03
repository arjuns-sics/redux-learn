import ChildComponent from './ChildComponent'
import AnotherChild from './AnotherChild'
import {useState} from "react"
import countContext from "./countContext"

export default function UseContextDemo() {
  const [count,setCount] = useState(0)
  return (
    <countContext.Provider value={{count,setCount}}>
    <div className="container mt-4">
      <h2>Use Context Demo</h2>
      
      <div className="row">
        <div className="col-md-6">
          <ChildComponent />
        </div>
        <div className="col-md-6">
          <AnotherChild />
        </div>
      </div>
      
      <div className="card p-3">
        <h5>Parent Component</h5>
        <p>Current count state: {count}</p>
        <small className="text-muted">
          The parent holds the state and passes it down as props to children.
        </small>
      </div>
    </div>
    </countContext.Provider>
  )
}