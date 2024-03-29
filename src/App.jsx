/* eslint-disable react-hooks/exhaustive-deps */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WisataSearch from "./pages/WisataSearchPage";
import ProfilePage from "./pages/ProfilePage";
import TourGuideProfile from "./pages/TourGuideProfile";
import ToureGuidePage from "./pages/ToureGuidePage";
import RegisterToureGuide from "./pages/RegisterToureGuide";
import InformasiWisataPage from "./pages/InformasiWisataPage";
import TripPlannerHome from "./pages/TripPlannerHomePage";
import PlannerFormPage from "./pages/PlannerFormPage";
import PlannerAdd from "./pages/PlannerAddPage";
import PlannerAi from "./pages/PlannerAiPage";
import TourGuideSearch from "./pages/TourGuideSearchPage";
import DestinationAdd from "./pages/DestinationAddPage";
import PlannerUpdate from "./pages/PlannerUpdatePage";
import ProfileUpdate from "./pages/ProfileUpdatePage";
import ProfileTourGuide from "./pages/ProfileTourGuidePage";
import LihatPeta from "./pages/LihatPetaPage";
import EmptyState from "./pages/EmptyStatePage";
import LihatPetaAll from "./pages/LihatPetaAllPage";
import SewaPemandu from "./pages/SewaPemanduPage";
import Chat from "./pages/ChatPage";
import ListChat from "./pages/ListChatPage";
import ProtectedRoute, {
  ProtectedLoginRoute,
  ProtectedClientRoute,
  ProtectedTGRoute,
} from "./utils/protectedRoute";
import AddDestination from "./pages/AddDestination";
import ChatRoom from "./component/ChatRoom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<ProtectedRoute />}>
        <Route exact path="/" element={<HomePage />} />
        <Route path="destination/:id" element={<InformasiWisataPage />} />
        <Route exact path="destination/:id/map" element={<LihatPeta />} />
        <Route exact path="destination/search" element={<WisataSearch />} />
        <Route exact path="destination/add" element={<DestinationAdd />} />

        <Route exact path="/tourguide/search" element={<TourGuideSearch />} />
        <Route path="/tourguide/:id" element={<ProfileTourGuide />} />
        <Route path="/chatasdas" element={<Chat />} />
        <Route path="/chat" element={<ListChat />} />

        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/profile/update" element={<ProfileUpdate />} />

        <Route exact path="/planner/:id/add" element={<PlannerAdd />} />
        <Route exact path="/planner/:id/map" element={<LihatPetaAll />} />
        <Route exact path="/planner/:id/rent" element={<TourGuideProfile />} />
        {/* <Route
          exact
          path="/planner/:id/rent/tourguide"
          element={<TourGuideProfile />}
        /> */}
        <Route
          exact
          path="/planner/:id/plan/:planId/update"
          element={<PlannerUpdate />}
        />

        <Route exact path="/planner" element={<TripPlannerHome />} />
        <Route exact path="/planner/form" element={<PlannerFormPage />} />
        <Route
          exact
          path="/planner/add-destination"
          element={<AddDestination />}
        />
        <Route exact path="/planner/:id" element={<PlannerAi />} />
        <Route exact path="/chat/:id" element={<ChatRoom />} />
      </Route>

      <Route element={<ProtectedLoginRoute />}>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedClientRoute />}>
        <Route
          exact
          path="/tourguide/register"
          element={<RegisterToureGuide />}
        />
      </Route>

      <Route element={<ProtectedTGRoute />}>
        <Route exact path="/tourguide" element={<ToureGuidePage />} />
      </Route>

      <Route path="/*" Component={EmptyState} />
    </>
  )
);
