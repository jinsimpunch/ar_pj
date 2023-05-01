import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Map from "./routes/Map";
import Shopping from "./routes/Shopping";
import Commu from "./routes/Commu";
import Shop from "./components/Shop";
import Dine from "./components/Dine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "shopping",
        element: <Shopping />,
        children: [
          {
            path: "shop",
            element: <Shop />,
          },
          {
            path: "dine",
            element: <Dine />,
          },
        ],
      },
      {
        path: "commu",
        element: <Commu />,
      },
    ],
  },
]);

export default router;
