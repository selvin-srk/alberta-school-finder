import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import FinderPage from './pages/FinderPage.jsx'
import NavBar from './components/NavBar.jsx'

function App() {
  const navigate = useNavigate()

  // If 404.html stashed a path (because the browser was sent here after
  // a direct visit/refresh on a route like /finder), pick it up once and
  // navigate there - this completes the GitHub Pages redirect trick.
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath')
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath')
      navigate(redirectPath, { replace: true })
    }
  }, [navigate])

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
