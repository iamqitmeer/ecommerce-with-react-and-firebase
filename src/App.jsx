import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/AboutUs";
import Contact from "./Screens/ContactUs";
import AppLayout from "./Components/AppLayout";
import ErrorPage from "./Screens/ErrorPage";
import Product from "./Screens/Products";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import getProducts from "./api/getProducts";
import ProductDetails from "./Screens/ProductDetails";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import EditProfile from "./Screens/EditProfile";
import Cart from "./Screens/Cart";
import AddProducts from "./Screens/AddProducts";

function App() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...

      alert("User is signed out");
    }
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product",
          element: <Product />,
          loader: getProducts,
        },
        {
          path: "/product/:id",
          element: <ProductDetails />,
          loader: getProducts,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/edit-profile",
          element: <EditProfile />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },{
          path: "/add-your-products",
          element: <AddProducts />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
