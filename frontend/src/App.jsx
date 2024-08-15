import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import { FeedPage } from "./pages/Feed/FeedPage";
import { AuthenticationPage } from "./pages/Authentication/AuthenticationPage";

// docs: https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/posts",
    element: <FeedPage />,
  },
  // Dual Sign up & Log in page
  {
    path: "/authentication",
    element: <AuthenticationPage />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
