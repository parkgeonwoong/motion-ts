import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import App from "./routes/App";
import Layout from "./routes/Layout";
import Motion from "./routes/Motion";
import Presence from "./routes/Presence";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "motion",
        element: <Motion />,
      },
      {
        path: "presence",
        element: <Presence />,
      },
      {
        path: "layout",
        element: <Layout />,
      },
    ],
  },
]);

export default router;
