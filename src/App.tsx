import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout/Layout";
import Matches from "./pages/Matches";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Players from "./pages/Players";
import Games from "./pages/Games";
import Login from "./pages/auth/Login";
import CreateAccount from "./pages/auth/CreateAccount";
import Servers from "./pages/Servers";
import Match from "./pages/Match";
import Team from "./pages/Team";
import Player from "./pages/auth/Player";
import Events from "./pages/Events";
import Event from "./pages/Event";
import UserLayout from "./pages/layout/UserLayout";
import UserEdit from "./pages/user/Edit";
import UserSettings from "./pages/user/Settings";
import UserNotifications from "./pages/user/Notifications";
import UserAvatar from "./pages/user/Avatar";
import UserTeam from "./pages/user/Team";
import UserEvents from "./pages/user/Events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="matches" element={<Matches />} />
          <Route path="match/:matchId" element={<Match />} />

          <Route path="teams" element={<Teams />} />
          <Route path="team/:teamId" element={<Team />} />

          <Route path="players" element={<Players />} />
          <Route path="player/:playerId" element={<Player />} />

          <Route path="events" element={<Events />} />
          <Route path="event/:eventId" element={<Event />} />

          <Route path="games" element={<Games />} />

          <Route path="servers" element={<Servers />} />

          <Route path="login" element={<Login />} />
          <Route path="create-account" element={<CreateAccount />} />

          <Route path="user/*" element={<UserLayout />}>
            <Route path="edit" element={<UserEdit />} />
            <Route path="avatar" element={<UserAvatar />} />
            <Route path="team" element={<UserTeam />} />
            <Route path="settings" element={<UserSettings />} />
            <Route path="events" element={<UserEvents />} />
            <Route path="notifications" element={<UserNotifications />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
