import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./assets/css";
import {
  Root,
  MovingCharacter,
  ThreeDoors,
  TryScrollEvent,
  MoveTheBall,
} from "./pages";

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
  {
    path: "/move-the-ball",
    element: <MoveTheBall />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
