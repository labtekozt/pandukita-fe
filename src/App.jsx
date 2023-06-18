import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import TourGuideProfile from './pages/TourGuideProfile';

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
        </Routes>
      </div>
    </>
  )
}

export default App
