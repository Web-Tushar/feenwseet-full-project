import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Features from "./pages/Features/Features"
import RootLayout from "./layouts/RootLayout";
import Price from "./pages/price/Price";
import Faq from "./pages/FAQ/Faq";
import Blog from "./pages/Blog/Blog";
import Conatct from "./pages/contact/Contact";


export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>

      <Route element={<RootLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Features" element={<Features/>} />
          <Route path="Price" element={<Price/>}/>
          <Route path="Faq" element={<Faq/>}/>
          <Route path="Blog" element={<Blog/>}/>
          <Route path="contact" element={<Conatct/>}/>

      </Route>

      </>
        
    )
  );

  return (
    <RouterProvider router={router}
  />
  )
}
