import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";
import Form from "./Form";
import NotFound from "./NotFound";

import FollowButton from "./FollowButton";
import Prompt from "./Prompt";

import Password from "./Password";

import Templ from "./Templ";
import UseObj from "./UseObj";
import Use from "./Use";
import BasicMenu from "./BasicMenu";
import Basic from "./Basic";
import Profile from "./Profile";

import Components from "./Components";

function CustomRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Basic" element={<Basic />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/BasicMenu" element={<BasicMenu />} />
          <Route path="/form" element={<Form />} />
          <Route path="/game" element={<Game />} />
          <Route path="/folowbutton" element={<FollowButton />} />
          <Route path="/password" element={<Password />} />
          <Route path="/prompt" element={<Prompt />} />
          <Route path="/Templ" element={<Templ />} />
          <Route path="/Use" element={<Use />} />
          <Route path="/useobj" element={<UseObj />} />
          <Route path="/usetabs" element={<Components />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default CustomRoutes;
