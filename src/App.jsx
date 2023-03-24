import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Gigs from "./Pages/gigs/Gigs";
import Gig from "./Pages/gig/Gig";
import Message from "./Pages/message/Message";
import Orders from "./Pages/orders/Orders";
import Mygigs from "./Pages/myGigs/Mygigs";
import Add from "./Pages/add/Add";
import Messages from "./Pages/messages/Messages";
import Home from "./Pages/home/Home";
 import "./App.scss"
function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/gigs",
          element: <Gigs/>,
        },
        {
          path: "/gig/:id",
          element: <Gig/>,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <Mygigs />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
