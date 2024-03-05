import { Route, Routes as MyRoutes } from "react-router-dom";
import Home from "../Pages/HomePage";
import NotFound from "../Pages/ErrorPage";

const Routes = () => {
  return (
    <MyRoutes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </MyRoutes>
  );
};

export default Routes;
