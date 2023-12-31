import Home from './Page/HomePage/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import ProductDetailsHome from './Page/ProductDetailsPage/ProductDetailsHome';
import SearchProductsPage from './Page/ProductSearchPage/SearchProductsPage';
import LoginPage from './Page/Auth/LoginPage';
import Register from './Page/Auth/RegisterPage';
import Cart from './Page/Cart/Cart';
import AdminHomePage from './Page/Admin/AdminHomePage';
import AdminProductsPage from './Page/Admin/AdminProductsPage';
import AdminBrandPage from './Page/Admin/AdminBrandPage';
import AdminAddProductPage from './Page/Admin/AdminAddProductPage';
import BrandPage from './Page/BrandPage/BrandPage';
import CategoryPage from './Page/CategoryPage/CategoryPage';
import AdminSubCategoryPage from './Page/Admin/AdminSubCategoryPage';
import AdminEditProductPage from './Page/Admin/Admin_Edit_ProductPage';
import AdminCategoryPage from './Page/Admin/AdminCategoryPage';
import ForgetPasswordPage from './Page/Auth/ForgetPasswordPage';
import VerifyResetCodePage from './Page/Auth/VerifyResetCodePage';
import ResetPassword from './Page/Auth/ResetPassword';
import NavBar from './Utility/Header/NavBar';
import Footer from './Utility/Footer/Footer';
function App() {
  const HeaderDisplay = (window.location.pathname === '/' || window.location.pathname === '/allcategory'
    || window.location.pathname === '/productdetails/:id' || window.location.pathname === '/allproducts'
    || window.location.pathname === '/allbrand' || window.location.pathname === '/cart') ? <NavBar /> : null
  return (
    <div className="App">

      <HashRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allcategory' element={<CategoryPage />} />
          <Route path='/productdetails/:id' element={<ProductDetailsHome />} />
          <Route path='/allproducts' element={<SearchProductsPage />} />
          <Route path='/allbrand' element={<BrandPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/user/forgetpassword' element={<ForgetPasswordPage />} />
          <Route path='/user/verifycode' element={<VerifyResetCodePage />} />
          <Route path='/user/resetpassword' element={<ResetPassword />} />
          <Route path="/admin/home" element={<AdminHomePage />} />
          <Route path="/admin/allproducts" element={<AdminProductsPage />} />
          <Route path="/admin/allcategory" element={<AdminCategoryPage />} />
          <Route path="/admin/addbrand" element={<AdminBrandPage />} />
          <Route path="/admin/addsubcategory" element={<AdminSubCategoryPage />} />
          <Route path="/admin/editproduct/:id" element={<AdminEditProductPage />} />
          <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
          <Route path='*' element={<p className='mt-5 pt-5'> page not found </p>} />
        </Routes>
        <Footer />
      </HashRouter>


    </div>
  );
}

export default App;
