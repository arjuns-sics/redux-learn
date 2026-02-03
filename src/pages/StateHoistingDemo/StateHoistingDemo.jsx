import ChildComponent from './ChildComponent'
import AnotherChild from './AnotherChild'
import {useState} from "react"
import MultiplyComponent from './MultiplyComponent'

export default function StateHoistingDemo() {
  const [count,setCount] = useState(0)
  return (
    <div className="container mt-4">
      <h2>State Hoisting Demo</h2>
      
      <div className="row">
        <div className="col-md-4">
          <ChildComponent count={count} setCount={setCount} />
        </div>
        <div className="col-md-4">
          <AnotherChild count={count} />
        </div>
        <div className="col-md-4">
          <MultiplyComponent count={count} setCount={setCount}/>
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
  )
}