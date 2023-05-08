import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './Nav/Navbar'
import About from './components/about/About'
import Shop from './components/Shop/Shop'
import Order from './components/order/Order'
import Inventory from './components/inventory/Inventory'
import { productsCartloader } from './components/loders/productsCartloder'
import LogIn from './components/logIn/LogIn'
import SignUp from './components/signUp/SignUp'
import Shipping from './components/shipping/Shipping'
import PrivateRoute from './components/privateRoute/PrivateRoute'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar></Navbar>,
      children: [
        { path: '/', element: <Shop></Shop> },
        {
          path: '/order',
          loader: productsCartloader,
          element: <Order></Order>,
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>,
        },
        {
          path: '/shipping',
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
        },
        {
          path: '/about',
          element: <About></About>,
        },
        {
          path: '/login',
          element: <LogIn></LogIn>,
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>,
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
