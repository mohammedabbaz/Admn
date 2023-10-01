import "./App.css";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Menu from "./Components/Menu/Menu.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Users from "./pages/User/Users.jsx";
import Products from "./pages/Product/Products.jsx";
import Calendar from "./pages/Calendar/Calendar.jsx";
import Categories from "./pages/Categories/Categories.jsx";
import Analytics from "./pages/Analytics/Analytics.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import Banking from "./pages/Banking/Banking.jsx";
import Karban from "./pages/Karban/Karban.jsx";
import { GrSettingsOption } from "react-icons/gr";
import Home from "./pages/Home/Home";
import "./styles/global.scss";
import { useState } from "react";
import AppContext from "./Contexts/AppContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isMenuActive, setMenuActive] = useState(true);
  const [showparameter, setShowParameter] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseParameter = () => setShowParameter(false);

  const Layout = () => {
    return (
      <div className="main">
        <div className="navBar">
          <NavBar />
        </div>

        <div className=" M_container">
          <div className={isMenuActive ? "sideBar" : "clozedMenu"}>
            <Menu />
          </div>
          {/* menu canfas */}
          <div className="canfas">
            <Offcanvas
              show={show}
              style={{ width: "50%" }}
              onHide={handleClose}
            >
              <Offcanvas.Body>
                <Menu />
              </Offcanvas.Body>
            </Offcanvas>
          </div>
          {/* parameter canfas */}
          <div className="parameter">
            <Offcanvas
              placement="end"
              show={showparameter}
              
              onHide={handleCloseParameter}
            >
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={handleCloseParameter}
              ></button>
              <Offcanvas.Body>settings</Offcanvas.Body>
            </Offcanvas>
          </div>

          <div className="content">
            <Outlet />
          </div>
          <div />
        </div>

        <GrSettingsOption
          color="white"
          className="settings"
          onClick={() => setShowParameter(true)}
        />
      </div>
    );
  };

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/Orders",
          element: <Orders />,
        },
        {
          path: "/Calendar",
          element: <Calendar />,
        },
        {
          path: "/Categories",
          element: <Categories />,
        },
        {
          path: "/Analytics",
          element: <Analytics />,
        },
        {
          path: "/Banking",
          element: <Banking />,
        },
        {
          path: "/Karban",
          element: <Karban />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <AppContext.Provider value={{ isMenuActive, setMenuActive, show, setShow }}>
      <RouterProvider router={routers} />;
    </AppContext.Provider>
  );
}

export default App;
