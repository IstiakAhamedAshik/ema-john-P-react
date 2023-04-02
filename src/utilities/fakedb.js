// use local storage to manage cart data

const addShoppingCart = (id) => {
  let shoppingCart = {}
  let storecart = localStorage.getItem('shopping-cart')
  if (storecart) {
    shoppingCart = JSON.parse(storecart)
  } else {
    shoppingCart = {}
  }

  const quantity = shoppingCart[id]
  if (quantity) {
    let newQuantity = quantity + 1
    shoppingCart[id] = newQuantity
  } else {
    shoppingCart[id] = 1
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}
const getShoppingCart = () => {
  let shoppingCart = {}
  let storecart = localStorage.getItem('shopping-cart')
  if (storecart) {
    shoppingCart = JSON.parse(storecart)
  }
  return shoppingCart
}

export { addShoppingCart, getShoppingCart }
