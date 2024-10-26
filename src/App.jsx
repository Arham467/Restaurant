import React from "react";
import Home from "./Layout/Home";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Routlayout from './Component/Routlayout';
import Menu from './Component/Menu';
import ContactPage from './Component/ContactPage';
import About from "./Layout/About";
import BlogPart from "./Component/BlogPart";
import BlogDetails from "./Component/BlogDetails";
import Wishlist from "./Layout/Wishlist";
import BookTablePage from "./Component/BookTablePage";
import OrderPage from "./Layout/OrderPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Routlayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/blog' element={<BlogPart />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/blog_details/:id' element={<BlogDetails />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/order_food/:id' element={<OrderPage />} />
          <Route path='/book_table' element={<BookTablePage />} />
        </Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
