import { Route, Routes } from 'react-router-dom';

import LoginContainer from './containers/_LoginContainer/LoginContainer';
import RegisterContainer from './containers/_RegisterContainer/RegisterContainer';
import ForgotPasswordContainer from './containers/_ForgotPasswordContainer/ForgotPasswordContainer';

import LandingPageContainer from './containers/_LandingPageContainer/_LandingPageContainer';
import ProfileContainer from './containers/_ProfileContainer/ProfileContainer';
import ProductDetailContainer from './containers/_ProductDetailContainer/ProductDetailContainer';
import CartContainer from './containers/_CartContainer/CartContainer';
import CheckoutContainer from './containers/_CheckoutContainer/CheckoutContainer';

import AdminDashboardContainer from './containers/_AdminDashboardContainer/AdminDashboardContainer';

export default function App() {
  return (
    <Routes>


      <Route path='/login' element={<LoginContainer />} />
      <Route path='/register' element={<RegisterContainer />} />
      <Route path='/forgot-password' element={<ForgotPasswordContainer />} />


      <Route path='/' element={<LandingPageContainer />} />
      <Route path='/profile' element={<ProfileContainer />} />
      <Route path='/product/:id' element={<ProductDetailContainer />} />
      <Route path='/cart' element={<CartContainer />} />
      <Route path='/checkout' element={<CheckoutContainer />} />


      <Route path='/dashboard' element={<AdminDashboardContainer />} />

    </Routes>
  );
}