import { memo } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Notfound from './Components/Notfound/Notfound';
import { createBrowserRouter ,createHashRouter,RouterProvider } from 'react-router-dom';


let routers = createHashRouter([
  {
    path: '', element: <Layout />, children: [
  {index:true,element:<Home/>},
  {path:'portfolio',element:<Portfolio/>},
  {path:'contact',element:<Contact/>},
  {path:'about',element:<About/>},
  {path:'*',element:<Notfound/>},
]}  
])

function App() {
  
  return <>
    <RouterProvider router={routers } />

  </>
}

export default memo(App);
