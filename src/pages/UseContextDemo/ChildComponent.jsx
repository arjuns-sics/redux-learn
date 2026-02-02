function ChildComponent() {
  return (
    <div className="card p-3 mb-3">
      <h5>Child Component</h5>
      <p>Count received from parent: 0</p>
      <button className="btn btn-primary">
        Increment Count
      </button>
    </div>
  )
}

export default ChildComponent