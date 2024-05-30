import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/home";
import Loading from "../pages/loading";
import Recommand from "../pages/recommand";
import Explain from "../pages/explain";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Start />} /> */}
        <Route index element={<Home />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/recommand" element={<Recommand />} />
        <Route path="/explain" element={<Explain />} />
      </Route>
    </Routes>
  );
};
export default Router;
