import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Notifications from "./Pages/Guide/Notifications";
import HomeGuide from "./Pages/Guide/HomeGuide";
import HomeUser from "./Pages/User/HomeUser"
import Home from "./Pages/Home/Home";
import UserProfile from "./Pages/User/UserProfile";
import GuideProfile from "./Pages/Guide/GuideProfile";
import Login from "./Pages/Login/Login";
import { GlobalState } from "./Context/global"
import ObjectiveGuideList from "./Pages/ObjectiveGuideList/ObjectiveGuideList";

function App(props) {
  return (
    <GlobalState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifications" element={<Notifications />} />

          <Route
            path="/user/:objectiveName/guides"
            exact
            element={<ObjectiveGuideList />}

          />
          <Route path="/user" element={<HomeUser />} />

          <Route
            path="/guide/:objectiveName/guides"
            exact
            element={<ObjectiveGuideList />}

          />
          <Route path="/guide" element={<HomeGuide />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/guideProfile" element={<GuideProfile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </GlobalState>
  );
}

export default App;
