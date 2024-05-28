import { Navigate } from 'react-router-dom';
import Layout from "../components/layout";
// import NotFoundPage from "pages/not-found-page/NotFoundPage";
import { Home } from '../page/home';
import AboutMePage from '../page/about-me-page';
import PortfolioPage from '../page/portfolio-page';
import ShopPage from '../page/shop-page';
import CommissionsPage from '../page/commissions-page';
import CommissionsOrderPage from '../page/commission-order-page';


export const mainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {path: '*', element: <Navigate to='/404' />},
    {path: '/', element: <Home/>},
    {path: '/about-me', element: <AboutMePage/>},
    {path: '/portfolio', element: <PortfolioPage/>},
    {path: '/shop', element: <ShopPage/>},
    {path: '/shop/stuff-you-can-buy', element: <AboutMePage/>},
    {path: '/shop/commissions', element: <CommissionsPage/>},
    {path: '/shop/commissions/logo', element: <CommissionsOrderPage/>},
    {path: '/shop/commissions/cover', element: <CommissionsOrderPage/>},
    {path: '/shop/commissions/cartoon', element: <CommissionsOrderPage/>},
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

