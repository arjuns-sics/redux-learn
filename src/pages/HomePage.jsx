import { Link } from 'react-router'

export default function HomePage() {
  return (
    <div className="container mt-4">
      <div className="jumbotron bg-light p-5 rounded">
        <h1 className="display-4">Redux Learning Project</h1>
        <p className="lead">
          Welcome to the starter project for learning Redux and global state management!
        </p>
        <hr className="my-4" />
        <p>
          This project demonstrates different state management approaches before adding Redux:
        </p>
        
        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">State Management Concepts</h5>
                <p className="card-text">
                  Learn about state hoisting and useContext before diving into Redux.
                </p>
                <div className="d-grid gap-2">
                  <Link to="/state-hoisting" className="btn btn-outline-primary">
                    State Hoisting Demo
                  </Link>
                  <Link to="/use-context" className="btn btn-outline-success">
                    useContext Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">E-commerce App</h5>
                <p className="card-text">
                  A simple shopping app where we'll add Redux for state management.
                </p>
                <div className="d-grid gap-2">
                  <Link to="/products" className="btn btn-primary">
                    Shop Products
                  </Link>
                  <Link to="/cart" className="btn btn-outline-secondary">
                    View Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}