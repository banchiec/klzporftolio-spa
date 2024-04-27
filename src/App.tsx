import { Navbar } from "./components/navbar";
import './global.scss'
import chanel from './assets/svg/chanel.svg' 
import { GroupButtonsMark } from "./components/group-buttons-mark";
import { Gallery } from "./components/gallery";
import { ProductRecommendation } from "./views/home-view/components/product-recommendations/product-recommendation";
import Header from "./components/header";
import { Home } from "./page/home";


function App() {
  const handleClick = () =>{
    console.log("object");
  }

  const buttonsMark =[
    {
      name: 'Chanel',
      svg: chanel,
      click: handleClick
    },
    {
      name: 'Burberry',
      svg: chanel,
      click: handleClick
    },
    {
      name: 'Dior',
      svg: chanel,
      click: handleClick
    },
    {
      name: 'Fendi',
      svg: chanel,
      click: handleClick
    },
    {
      name: 'Gucci',
      svg: chanel,
      click: handleClick
    },
    {
      name: 'Versage',
      svg: chanel,
      click: handleClick
    },
     {
      name: 'Redimidos',
      svg: chanel,
      click: handleClick
    },
    {
      name: 'Armani',
      svg: chanel,
      click: handleClick
    },
  ] 
  return (
    <>
      <Home/>
      {/* <Navbar/> */}
      {/* <ProductRecommendation/> */}
      {/* <GroupButtonsMark buttonsMark={buttonsMark}/> */}
      {/* <Gallery/> */}
    </>
  );
}

    export default App;
