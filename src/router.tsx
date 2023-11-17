import { createBrowserRouter } from "react-router-dom";
import App from './App'
import SignIn from './components/SignIn/SignIn'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
