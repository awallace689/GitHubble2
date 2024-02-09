import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import SignIn from "./components/SignIn/SignIn";
import NotFound from "./components/NotFound/NotFound";

const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/signin" replace />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default router;
