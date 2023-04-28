import "./App.css";
import {
  createBrowserRouter as Router,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./page/Home/home.jsx";
import Mission from "./page/mission/mission";
import Footer from "./section/footer/footer";
import Nav from "./section/nav-bar/nav";
import Services from "./page/services/services.jsx";
import Areas from "./page/areas/areas";
import Staff from "./page/staff/staff";
import Rates from "./page/rates/rates";
import WhyUs from "./page/why-us/why-us";
import AfterTheScale from "./page/AfterTheScale/AfterTheScale.jsx";
import Contact from "./page/contact/contact";
import About from "./page/about/about";
import Faq from "./page/faq/faq.jsx";
import Login from "./page/login/login.jsx";
import AdminTop from "./component/adminTop/adminTop";
import Sidebar from "./component/adminSidebar/sidebar";
import AdminContact from "./component/adminContact.jsx/adminContact";
import ContactPreview from "./component/contactPreview/contactPreview";
import Newsletter from "./component/newsletter/newsletter";
function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

function AdminLayout() {
  return (
    <>
      <AdminTop />
      <div className="dashboardBody">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

const router = Router([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/mission",
        element: <Mission />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/areas",
        element: <Areas />,
      },
      {
        path: "/staff",
        element: <Staff />,
      },
      {
        path: "/rates",
        element: <Rates />,
      },
      {
        path: "/whyus",
        element: <WhyUs />,
      },
      {
        path: "/afterthescale",
        element: <AfterTheScale />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminContact />,
      },
      {
        path: "/admin/contact",
        element: <AdminContact />,
      },
      {
        path: "/admin/contact/:id",
        element: <ContactPreview />,
      },
      {
        path: "/admin/newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
