import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './Nav/Navbar'
import About from './components/about/About'
import Shop from './components/Shop/Shop'
import Order from './components/order/Order'
import Inventory from './components/inventory/Inventory'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar></Navbar>,
      children: [
        { path: '/shop', element: <Shop></Shop> },
        {
          path: '/order',
          element: <Order></Order>,
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>,
        },
        {
          path: '/about',
          element: <About></About>,
        },
      ],
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
