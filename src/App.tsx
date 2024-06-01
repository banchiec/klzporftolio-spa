import { Component } from "react";
import { useRoutes } from "react-router-dom";
import { mainRoutes } from "./config/routes";
import './global.scss'
import { useCategoriesList } from "./query/categories/useCategoriesList";

const Noop = ({children}: React.PropsWithChildren) => {
  return<>{children}</>
}

const App: React.FC = ({pageProps}: any) => {
  const routing = useRoutes([mainRoutes])
  const Layout = (Component as any).Layout ||Noop

  // const { data } = useCategoriesList()
  // console.log(data)

  return (
    <Layout pageProps={pageProps}>
      {routing}
    </Layout>
  );
}

export default App;
