import { Navigate } from 'react-router-dom';
import Layout from "../components/layout";
// import NotFoundPage from "pages/not-found-page/NotFoundPage";
import { Home } from '../page/home';
import AboutMePage from '../page/about-me-page';


export const mainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {path: '*', element: <Navigate to='/404' />},
    {path: '/', element: <Home/>},
    {path: '/about-me', element: <AboutMePage/>},
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

