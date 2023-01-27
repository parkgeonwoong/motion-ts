import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import App from "./routes/App";
import Motion from "./routes/Motion";
import Slider from "./routes/Slider";

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
        path: "slider",
        element: <Slider />,
      },
    ],
  },
]);

export default router;
