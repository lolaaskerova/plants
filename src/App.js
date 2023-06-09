import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import { ROUTES } from "./routes/route";

const router = createBrowserRouter(ROUTES);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
