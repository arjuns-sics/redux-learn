import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import axios from 'axios'
import Navbar from '../components/Navbar'

export default function ProductDetailPage() {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data)
      })
      .catch(error => {
        console.error('Error fetching product:', error)
      })
  }, [id])

  return (
    <>
    <Navbar/>
    <div className="container mt-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="breadcrumb-item active">{product.title}</li>
        </ol>
      </nav>

      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            className="img-fluid"
            alt={product.title}
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <div className="mb-3">
            <span className="badge bg-warning text-dark">
              {product.category}
            </span>
            <div className="mt-2">
              <h3 className="text-primary">${product.price}</h3>
            </div>
          </div>
          
          <div className="mb-4">
            <h4>Description</h4>
            <p>{product.description}</p>
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-primary btn-lg flex-fill">
              Add to Cart
            </button>
            <Link to="/products" className="btn btn-outline-secondary">
              Back to Products
            </Link>
          </div>

          <div className="mt-4">
            <h5>Rating</h5>
            <div className="d-flex align-items-center">
              <span className="me-2">
                {product.rating?.rate} / 5
              </span>
              <span>{product.rating?.count} reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}