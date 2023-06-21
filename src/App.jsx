import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import TourGuideProfile from './pages/TourGuideProfile';
import ToureGuidePage from './pages/ToureGuidePage';
import RegisterToureGuide from './pages/RegisterToureGuide';
import InformasiWisataPage from './pages/InformasiWisataPage';


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
          <Route path="/search" Component={SearchPage} />
          <Route path="/profile" Component={ProfilePage} />
          <Route path="/tourguideprofile" Component={TourGuideProfile} />
          <Route path="/toureguide" Component={ToureGuidePage} />
          <Route path="/registertoureguide" Component={RegisterToureGuide} />
          <Route path="/informasiwisata" Component={InformasiWisataPage} />
        </Routes>
      </div>
    </>
  )
}

export default App
