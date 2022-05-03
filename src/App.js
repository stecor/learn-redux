import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'
import Modal from './components/Modal'

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals(), [cartItems])
  })

  useEffect(() => {
    dispatch(getCartItems())
  })

  return isLoading ? (
    <div className='loading'>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className='App'>
      <main>
        {isOpen && <Modal />}
        <Navbar />
        <CartContainer />
      </main>
    </div>
  )
}

export default App
