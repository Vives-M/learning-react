import '../styles/Cart.css';
import { useState } from 'react'

function Cart() {
  const [cart, updateCart] = useState(0)
  const monsteraPrice = 8
  // const lierrePrice = 10
  // const fleursPrice = 15
  return <div className="lmj-cart">
    <h2>Panier</h2>
    <ul>
      <li>Monstera : {monsteraPrice} €</li>
      <button onClick={() => updateCart(cart + 1)}>
        Ajouter
      </button>
    </ul>
    <p>Total : { monsteraPrice * cart} €</p>
    </div>
}

export default Cart
