import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import Navbar from '../components/Navbar'

export default function ProductsPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.error('Error fetching products:', error)
      })
  }, [])

  return (
    <>
    <Navbar />
    <div className="container mt-4">
      <h2>Products</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text flex-grow-1">
                  {product.description.substring(0, 100)}...
                </p>
                <p className="card-text fw-bold">${product.price}</p>
                <div className="d-flex gap-2">
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-outline-primary flex-fill"
                  >
                    View
                  </Link>
                  <button className="btn btn-primary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}