export default function CartItem() {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-md-2">
            <img
              src="https://via.placeholder.com/100x100"
              className="img-fluid rounded"
              alt="Product"
            />
          </div>
          <div className="col-md-4">
            <h6 className="mb-0">Product Name</h6>
            <small className="text-muted">Category</small>
          </div>
          <div className="col-md-2">
            <span className="fw-bold">$99.99</span>
          </div>
          <div className="col-md-2">
            <div className="input-group input-group-sm">
              <button className="btn btn-outline-secondary" type="button">
                -
              </button>
              <input
                type="text"
                className="form-control text-center"
                value="1"
                readOnly
              />
              <button className="btn btn-outline-secondary" type="button">
                +
              </button>
            </div>
          </div>
          <div className="col-md-2">
            <button className="btn btn-sm btn-danger">
              <i className="bi bi-trash"></i> Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}