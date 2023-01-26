import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Motion from "./Motion";
import Root from "./Root";

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
    ],
  },
]);

export default router;
