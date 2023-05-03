import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Routes,
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
import ProtectedRoute from "./utils/protectedRoute";
import { userContext } from "./utils/authContext.jsx";
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
      {/* <AdminTop /> */}
      <div className="dashboardBody">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

// const router = Router([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/mission",
//         element: <Mission />,
//       },
//       {
//         path: "/services",
//         element: <Services />,
//       },
//       {
//         path: "/areas",
//         element: <Areas />,
//       },
//       {
//         path: "/staff",
//         element: <Staff />,
//       },
//       {
//         path: "/rates",
//         element: <Rates />,
//       },
//       {
//         path: "/whyus",
//         element: <WhyUs />,
//       },
//       {
//         path: "/afterthescale",
//         element: <AfterTheScale />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/faq",
//         element: <Faq />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/",
//     element: (
//       <ProtectedRoute>
//         <AdminLayout />
//       </ProtectedRoute>

//     ),
//     children: [
//       {
//         path: "/admin",
//         element: <AdminContact />,
//       },
//       {
//         path: "/admin/contact",
//         element: <AdminContact />,
//       },
//       {
//         path: "/admin/contact/:id",
//         element: <ContactPreview />,
//       },
//       {
//         path: "/admin/newsletter",
//         element: <Newsletter />,
//       },
//     ],
//   },
// ]);

function App() {
  const [isLoggedIn, setLoggedIn] = useState({
    user: null,
    authenticated: false,
  });
  console.log("from app js" + isLoggedIn.authenticated);

  return (
    <userContext.Provider value={[isLoggedIn, setLoggedIn]}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/services" element={<Services />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/whyus" element={<WhyUs />} />
            <Route path="/afterthescale" element={<AfterTheScale />} />
            <Route path="/faq" element={<Faq />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/admin" element={<AdminContact />} />
            <Route path="/admin/contact" element={<AdminContact />} />
            <Route path="/admin/contact/:id" element={<ContactPreview />} />
            <Route path="/admin/newsletter" element={<Newsletter />} />
          </Route>
        </Routes>
      </Router>
    </userContext.Provider>
  );
}

export default App;
