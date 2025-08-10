import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <LoginPage></LoginPage>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
