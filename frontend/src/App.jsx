import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../tailwind.css";
import "./global.css";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { AuthenticationPage } from "./pages/Authentication/AuthenticationPage";
import { PantryPage } from "./pages/PantryPage";
import { NutritionPage } from "./pages/Nutrition/NutritionPage";
import { ExamplePlot } from "./components/RadialChart/ExamplePlot";
// docs: https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <AuthenticationPage />,
  },
  {
    path: "/pantry",
    element: <PantryPage/>
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
