import { Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import SignIn from "./components/SignIn/SignIn";
import NotFound from "./components/NotFound/NotFound";

const routes = (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/signin" replace />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
);

export default routes;
