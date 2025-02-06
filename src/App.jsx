import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Brands from './Components/Brands/Brands';
import Categories from './Components/Categories/Categories';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Register from './Components/Register/Register';
import CounterContextprovider from './Context/CounterContext';
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CartContextProvider from './Context/CartContext';
import  { Toaster } from 'react-hot-toast';

 let query = new QueryClient()
let x = createBrowserRouter([{
  path:"",element:<Layout/>,
  children: [
    { path: "/", element: <ProtectedRoute> <Home /> </ProtectedRoute>},
    { path: "/products", element: <ProtectedRoute><Products /> </ProtectedRoute>},
    { path: "/cart", element:<ProtectedRoute><Cart /> </ProtectedRoute>},
    { path: "/brands", element: <ProtectedRoute> <Brands /></ProtectedRoute> },
    { path: "/categories", element: <ProtectedRoute> <Categories /> </ProtectedRoute>},
    { path: "productdetails/:id/:category", element: <ProtectedRoute> <ProductDetails/></ProtectedRoute> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <Notfound /> }
  ]
  
}, ]);
function App() {
  
  return(
    <>
    <UserContextProvider> 
      <CounterContextprovider> 
        <QueryClientProvider client={query}>
          <CartContextProvider >
            <RouterProvider router={x}> 
              <Toaster/>
              </RouterProvider>
              </CartContextProvider>
              <ReactQueryDevtools />
              </QueryClientProvider>
              </CounterContextprovider> 
              </UserContextProvider>
    </>
  );
}

export default App
