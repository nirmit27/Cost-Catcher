import React, { useContext } from "react";
import { ScrollToTop } from "./utils/ScrollToTop";
import { ThemeProvider, ThemeContext } from "./utils/ThemeContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";

// Product Pages
import API from "./pages/Product/API";
import Pricing from "./pages/Product/Pricing";
import Features from "./pages/Product/Features";

// Company Pages
import Blog from "./pages/Company/Blog";
import About from "./pages/Company/About";
import Contact from "./pages/Company/Contact";

// Resource Pages
import Community from "./pages/Resources/Community";
import HelpCenter from "./pages/Resources/HelpCenter";
import Documentation from "./pages/Resources/Documentation";

// Legal Pages
import CookiePolicy from "./pages/Legal/CookiePolicy";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import TermsOfService from "./pages/Legal/TermsOfService";

// Customer Routes
import Home from "./pages/Customer/Home";
import Account from "./pages/Customer/Account";
import AddDetails from "./pages/Customer/AddDetails";
import NewPassword from "./pages/Customer/NewPassword";
import TrackingList from "./pages/Customer/TrackingList";
import VerifyProduct from "./pages/Customer/VerifyProduct";
import ProductDetails from "./pages/Customer/ProductDetails";
import TrackNewProduct from "./pages/Customer/TrackNewProduct";
import EditAccountDetails from "./pages/Customer/EditAccountDetails";

// Components
import VerifyOTP from "./components/VerifyOTP";
import ProtectedRoute from "./components/ProtectedRoute";

const AppLayout = () => {
  const { theme, toggleTheme, setSystemTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <ScrollToTop />
      <div className="App">
        <Navbar toggleTheme={toggleTheme} setSystemTheme={setSystemTheme} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Landing /> },
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      { path: "/signup", element: <Signup /> },
      { path: "/signin", element: <Signin /> },

      // Product
      { path: "/api", element: <API /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/features", element: <Features /> },

      // Company
      { path: "/blog", element: <Blog /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },

      // Resources
      { path: "/help", element: <HelpCenter /> },
      { path: "/docs", element: <Documentation /> },
      { path: "/community", element: <Community /> },

      // Legal
      { path: "/cookie", element: <CookiePolicy /> },
      { path: "/terms", element: <TermsOfService /> },
      { path: "/privacy", element: <PrivacyPolicy /> },

      // Customer
      { path: "/account", element: <Account /> },
      { path: "/newPassword", element: <NewPassword /> },
      { path: "/changePassword", element: <VerifyOTP /> },
      { path: "/trackinglist", element: <TrackingList /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/addProduct", element: <TrackNewProduct /> },
      { path: "/addProduct/addDetails", element: <AddDetails /> },
      { path: "/editAccountDetails", element: <EditAccountDetails /> },
      { path: "/addProduct/verifyProduct", element: <VerifyProduct /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
