import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button } from "@mui/material";

import Notifications from "./Pages/Guide/Notifications";
import HomeGuide from "./Pages/Guide/HomeGuide";
import HomeUser from "./Pages/User/HomeUser"
import Login from "./Pages/Login/Login";
import UserProfile from "./Pages/User/UserProfile";
import GuideProfile from "./Pages/Guide/GuideProfile";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/user" element={<HomeUser />} />
        <Route path="/guide" element={<HomeGuide />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/guideProfile" element={<GuideProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
