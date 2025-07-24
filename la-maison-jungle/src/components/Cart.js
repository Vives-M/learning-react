function Cart() {
  const monsteraPrice = 8
  const lierrePrice = 10
  const fleursPrice = 15
  return <div>
    <h2>Panier</h2>
    <ul>
      <li>Monstera : {monsteraPrice} €</li>
      <li>Lierre : {lierrePrice} €</li>
      <li>Bouquet de fleurs : {fleursPrice} €</li>
    </ul>
    <p>Total : { monsteraPrice + lierrePrice + fleursPrice } €</p>
    </div>
}

export default Cart
