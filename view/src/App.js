import {Routes, Route} from 'react-router-dom'
import About from './components/about/about';
import Cart from './components/cart/cart';
import Contact from './components/contact/contact';
import Error from './components/error/error';
import Home from './components/home/home';
import Products from './components/products/products';
import Profile from './components/profile/profile';
import Product from './components/product/product';
import SavedProducts from './components/saved/saved-product';
import Layout from './components/layout/layout';
import PrivateRoute from './utils/privateRoute';
import ContextProvider from './context/context';
import Login from './components/login/login';
import Register from './components/register/register'
// import Register
import Setting from './components/user-settings/settings';
import UserOrderList from './components/orders/orders';
import Category from './components/categories/categories';
import './App.css';

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path='products' element={<PrivateRoute><Products /></PrivateRoute>} />
          <Route path='profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='order' element={<PrivateRoute><UserOrderList /></PrivateRoute>} />
          <Route path='saved-products' element={<PrivateRoute><SavedProducts /></PrivateRoute>} />
          <Route path='cart' element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path='setting' element={<PrivateRoute><Setting /></PrivateRoute>} />
          <Route path='about' element={<PrivateRoute><About /></PrivateRoute>} /> 
          <Route path='contact' element={<PrivateRoute><Contact /></PrivateRoute>} />
          <Route path='products/:productSlug' element={<PrivateRoute><Product /></PrivateRoute>} />
          <Route path='categories/:id' element={<PrivateRoute><Category /></PrivateRoute>} />          
          <Route path='*' element={<PrivateRoute><Error /></PrivateRoute>} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
