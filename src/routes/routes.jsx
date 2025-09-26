import Home from "../pages/Homepage/Homepage";
import About from "../pages/About/About";
import NotFound from "../pages/Errorpages/Errorpages";
import Logement from "../pages/Logement/Logement";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/logement/:id",
    element: <Logement />,
  },
 
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
