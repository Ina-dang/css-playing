import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./assets/css";
import { Root, MovingCharacter, ThreeDoors, TryScrollEvent } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/moving-character",
    element: <MovingCharacter />,
  },
  {
    path: "/three-doors",
    element: <ThreeDoors />,
  },
  {
    path: "/try-scroll",
    element: <TryScrollEvent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
