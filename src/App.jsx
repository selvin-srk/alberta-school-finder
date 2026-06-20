import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import FinderPage from './pages/FinderPage.jsx'
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/finder" element={<FinderPage />} />
      </Routes>
    </>
  )
}

export default App
