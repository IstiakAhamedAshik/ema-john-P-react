import { getShoppingCart } from '../../utilities/fakedb'

export const productsCartloader = async () => {
  const productsData = await fetch('products.json')
  const products = await productsData.json()

  //get Cart
  const savecart = getShoppingCart()
  const previousCart = []

  for (const id in savecart) {
    const addedProduct = products.find((product) => product.id === id)
    if (addedProduct) {
      const quantity = savecart[id]
      addedProduct.quantity = quantity
      previousCart.push(addedProduct)
    }
  }
  return { products, previousCart }
}
