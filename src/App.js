import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './layouts/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductView from './Pages/ProductView';
import Cart from './Pages/Cart';
import 'react-toastify/dist/ReactToastify.css';
import ThankPage from './Pages/ThankPage';
import ProductCardGroup from './components/ProductCardGroup';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />} >
            <Route path='/react-project'  element={<Home />} />
            <Route path='/product' element={<ProductCardGroup />} />
            <Route path='/product/:slug' element={<ProductView />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/thank-you' element={<ThankPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App