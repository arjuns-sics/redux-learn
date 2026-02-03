import countContext from "./countContext"
import {useContext} from "react"
function AnotherChild() {
  const {count} = useContext(countContext)
  return (
    <div className="card p-3 mb-3">
      <h5>Another Child Component</h5>
      <p>I can also see the count: {count}</p>
    </div>
  )
}

export default AnotherChild