import countContext from "./countContext"
import { useContext } from "react"

function ChildComponent() {
  const {count,setCount} = useContext(countContext)
  function increase(){
    setCount(count+1)
  }
  return (
    <div className="card p-3 mb-3">
      <h5>Child Component</h5>
      <p>Count received from parent: {count}</p>
      <button onClick={increase} className="btn btn-primary">
        Increment Count
      </button>
    </div>
  )
}

export default ChildComponent