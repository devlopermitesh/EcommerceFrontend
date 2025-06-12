import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Pages/Index.tsx'
import Signup from './Pages/Signup.tsx'
import SignIn from './Pages/SignIn.tsx'
import Cart from './Pages/cart.tsx'
import CheckoutPage from './Pages/checkout.tsx'
import Profile from './Pages/profile.tsx'
import ProfileForm from './components/ProfileForm.tsx'
import { AddressBookForm } from './components/AddressBookForm.tsx'
import { PaymentMethodForm } from './components/PaymentMethodForm.tsx'
import  MyReturn from './Pages/MyReturn.tsx'
import MyCancellation from './Pages/MyCancellation.tsx'
import Mywishlist from './Pages/Mywishlist.tsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'signIn',
        element: <SignIn />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
      {
        path: 'myAccount',
        element: <Profile />,
        children: [
          {
            index: true,
            element: <ProfileForm/>,
          },
          {
            path: 'addressbook',
            element: <AddressBookForm/>,
          },
          {
            path: 'paymentoptions',
            element:<PaymentMethodForm/>,
          },
          {
            path: 'myreturns',
            element:<MyReturn/>,
          },
          {
            path: 'mycancellations',
            element: <MyCancellation/>,
          },
          {
            path: 'mywishlist',
            element: <Mywishlist/>,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(

  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
