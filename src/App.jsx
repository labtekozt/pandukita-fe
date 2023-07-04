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
import WisataAdd from "./pages/WisataAddPage";
import PlannerUpdate from "./pages/PlannerUpdatePage";
import ProfileUpdate from "./pages/ProfileUpdatePage";
import ProfileTourGuide from "./pages/ProfileTourGuidePage";
import LihatPeta from "./pages/LihatPetaPage";
import EmptyState from "./pages/EmptyStatePage";
import LihatPetaAll from "./pages/LihatPetaAllPage";
import SewaPemandu from "./pages/SewaPemanduPage";
import ProtectedRoute, { ProtectedLoginRoute } from "./utils/protectedRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<ProtectedRoute />}>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/:id" element={<InformasiWisataPage />} />
        <Route exact path="/:id/map" element={<LihatPeta />} />
        <Route exact path="/search" element={<WisataSearch />} />
        <Route exact path="/add" element={<WisataAdd />} />

        <Route path="/register/tourguide" element={<RegisterToureGuide />} />
        <Route path="/search/tourguide" element={<TourGuideSearch />} />
        <Route exact path="/tourguide" element={<ToureGuidePage />} />
        <Route path="/tourguide/:id" element={<ProfileTourGuide />} />
        <Route path="/tourguide/rent" element={<SewaPemandu />} />

        <Route exact path="/profile" element={<ProfilePage />} />
        <Route path="/profile/update" element={<ProfileUpdate />} />
        <Route path="/profile/tourguide" element={<TourGuideProfile />} />

        <Route exact path="/planner" element={<TripPlannerHome />} />
        <Route exact path="/planner/form" element={<PlannerFormPage />} />
        <Route exact path="/planner/add" element={<PlannerAdd />} />
        <Route exact path="/planner/update" element={<PlannerUpdate />} />
        <Route exact path="/planner/ai" element={<PlannerAi />} />
      </Route>

      <Route element={<ProtectedLoginRoute />}>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/emptystate" Component={EmptyState} />
      <Route path="/lihatpetaall" Component={LihatPetaAll} />
    </>
  )
);
// function App() {
//   return createBrowserRouter(
//     createRoutesFromElements(
//       <Route element={<NonLoginRoute />}>
//         <Route path="/" element={<HomePage />} />
//         <Route exact path="/:id" element={<InformasiWisataPage />} />
//         <Route path="/:id/map" element={<LihatPeta />} />
//         <Route exact path="/search" element={<WisataSearch />} />
//         <Route path="/add" element={<WisataAdd />} />
//       </Route>
//     )

// <Routes>

// <Route path="/" Component={HomePage} />
// <Route
// {
/* 

       */
// }
// </Routes>
//   );
// }

// export default App;
