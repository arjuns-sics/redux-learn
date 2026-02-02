import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import StateHoistingDemo from './pages/StateHoistingDemo/StateHoistingDemo'
import UseContextDemo from './pages/UseContextDemo/UseContextDemo'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <div className="min-vh-100 bg-light">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/state-hoisting" element={<StateHoistingDemo />} />
        <Route path="/use-context" element={<UseContextDemo />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
