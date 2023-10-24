import React from "react";
import { Route, Routes } from "react-router-dom";

import ReqAuth from "../Components/ReqAuth";
import Blog from "./Blog";
import Bookings from "./Bookings";
import Checkout from "./Checkout";
import Home from "./Home";
import LandingPage from "./LandingPage";
import ServicePage from "./ServicePage";
import Summary from "./Summary";
import NearMe from "./NearMe";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:city" element={<Home />} />
        <Route path="/:city/services=:service" element={<ServicePage />} />
        <Route path="/:city/near-me" element={<NearMe />} />

        <Route path="/bookings" element={<Bookings />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/:city/summary" element={<Summary />} />
        <Route
          path="/:city/summary/checkout"
          element={
            <ReqAuth>
              <Checkout />
            </ReqAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default MainRoutes;
