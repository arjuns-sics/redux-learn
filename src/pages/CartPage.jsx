import { Link } from 'react-router'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

export default function CartPage() {
  const items = useSelector((state)=>state.cart.items)
  console.log(items)
  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>

      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5>Cart Items</h5>
            </div>
            <div className="card-body">
              {items.map(item=>{
                return (
                  <CartItem key={item.id} item={item}/>
                )
              })}
              {/* <CartItem />
              <CartItem />
              <CartItem /> */}
              
              {items.length==0 && <div className="text-center py-5">
                <i className="bi bi-cart-x display-1 text-muted"></i>
                <h4 className="mt-3">Your cart is empty</h4>
                <p className="text-muted">
                  Add some products to your cart to see them here.
                </p>
                <Link to="/products" className="btn btn-primary">
                  Continue Shopping
                </Link>
              </div>}
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5>Order Summary</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>$0.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax:</span>
                <span>$0.00</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping:</span>
                <span>$0.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong>$0.00</strong>
              </div>
              <button className="btn btn-success w-100" disabled>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}