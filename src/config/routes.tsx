import { Navigate } from 'react-router-dom';
import Layout from "../components/layout";
// import NotFoundPage from "pages/not-found-page/NotFoundPage";
import { HomePage } from '../page/home-page';
import AboutMePage from '../page/about-me-page';
import PortfolioPage from '../page/portfolio-page';
import ShopPage from '../page/shop-page';
import ProductTypeCreateView from '../views/product-type-create-view';
import CategoryCreateView from '../views/category-create-view';
import ProductCreateView from '../views/product-create-view';
import { CategoryShopView } from '../views/category-shop-view';
import { CommissionsCreateView } from '../views/commission-create-view';
import { StuffYouCanBuyView } from '../views/stuff-you-can-buy-view';
import CartPage from '../page/cart-page';

export const mainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {path: '*', element: <Navigate to='/404' />},
    {path: '/', element: <HomePage/>},
    {path: '/product-type', element: <ProductTypeCreateView/>},
    {path: '/products', element: <ProductCreateView/>},
    {path: '/categories', element: <CategoryCreateView/>},
    {path: '/about-me', element: <AboutMePage/>},
    {path: '/portfolio', element: <PortfolioPage/>}, 
    {path: "/cart", element: <CartPage/>},
    {path: '/shop', element: <ShopPage/>},
    // {path: '/shop/stuff-you-can-buy', element: <AboutMePage/>},
    {path: '/shop/:category', element: <CategoryShopView/>},
    {path: '/shop/commissions/:productType', element: <CommissionsCreateView/>},
    {path: '/shop/stuff-you-can-buy/:productId', element: <StuffYouCanBuyView/>},
    // {path: '/shop/commissions/cover', element: <CommissionsOrderPage />},
    // {path: '/shop/commissions/cartoon-illustration', element: <CommissionsOrderPage />},
    // {path: '404', element: <NotFoundPage/>},
    // {path: 'account', element: <Navigate to='/account/list' />},
  ],
};

// export const accountRoutes = {
//   path: 'account',
//   element: <AccountLayout />,
//   children: [
//     {path: '*', element: <Navigate to='/404' />},
//     // {path: ':id', element: <AccountDetailView />},
//     {path: 'add', element: <AccountDetailView/>},
//     {path: 'list', element: <AccountDetailView/>},
//   ],
// };

