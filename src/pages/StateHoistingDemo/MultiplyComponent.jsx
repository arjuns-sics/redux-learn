function MultiplyComponent({count,setCount}) {
  const change = ()=>{
    setCount(count*2)
  }
  return (
    <div className="card p-3 mb-3">
      <h5>Child Component</h5>
      <p>Count received from parent: {count}</p>
      <button onClick={change} className="btn btn-primary">
        Mutiply Count
      </button>
    </div>
  )
}

export default MultiplyComponent