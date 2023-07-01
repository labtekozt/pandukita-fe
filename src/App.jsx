import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WisataSearch from './pages/WisataSearchPage';
import ProfilePage from './pages/ProfilePage';
import TourGuideProfile from './pages/TourGuideProfile';
import ToureGuidePage from './pages/ToureGuidePage';
import RegisterToureGuide from './pages/RegisterToureGuide';
import InformasiWisataPage from './pages/InformasiWisataPage';
import TripPlannerHome from './pages/TripPlannerHomePage';
import PlannerFormPage from './pages/PlannerFormPage';
import PlannerAdd from './pages/PlannerAddPage';
import plannerAi from './pages/PlannerAiPage';
import TourGuideSearch from './pages/TourGuideSearchPage';
import WisataAdd from './pages/WisataAdd.page';
import PlannerUpdate from './pages/PlannerUpdatePage';
import ProfileUpdate from './pages/ProfileUpdatePage';
import ProfileTourGuide from './pages/ProfileTourGuidePage';
import LihatPeta from './pages/LihatPetaPage';
import EmptyState from './pages/EmptyStatePage';
import LihatPetaAll from './pages/LihatPetaAllpage';
import SewaPemandu from './pages/SewaPemanduPage';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
          <Route path="/wisatasearch" Component={WisataSearch} />
          <Route path="/profileuser" Component={ProfilePage} />
          <Route path="/tourguideprofile" Component={TourGuideProfile} />
          <Route path="/toureguide" Component={ToureGuidePage} />
          <Route path="/registertoureguide" Component={RegisterToureGuide} />
          <Route path="/informasiwisata" Component={InformasiWisataPage} />
          <Route path="/tripplannerhome" Component={TripPlannerHome} />
          <Route path="/plannerform" Component={PlannerFormPage} />
          <Route path="/planneradd" Component={PlannerAdd} />
          <Route path="/plannerai" Component={plannerAi} />
          <Route path="/tourguidesearch" Component={TourGuideSearch} />
          <Route path="/wisataadd" Component={WisataAdd} />
          <Route path="/plannerupdate" Component={PlannerUpdate} />
          <Route path="/profilupdate" Component={ProfileUpdate} />
          <Route path="/profiltoureguide" Component={ProfileTourGuide} />
          <Route path="/lihatpeta" Component={LihatPeta} />
          <Route path="/emptystate" Component={EmptyState} />
          <Route path="/lihatpetaall" Component={LihatPetaAll} />
          <Route path="/sewapemandu" Component={SewaPemandu} />

        </Routes>
      </div>
    </>
  )
}

export default App
