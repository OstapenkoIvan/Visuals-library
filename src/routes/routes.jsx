import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import AppBar from "../components/AppBar";
import ErrorPage from "../utils/ErrorPage";

const TrailingImages = lazy(() => import("../pages/TrailingImages"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppBar />} errorElement={<ErrorPage />}>
      <Route index element={<TrailingImages />} errorElement={<ErrorPage />} />
    </Route>
  )
);

export default router;
