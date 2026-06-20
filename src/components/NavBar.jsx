import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  const location = useLocation()

  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        Alberta School Finder
      </Link>
      <nav className="navbar-links">
        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
        >
          Home
        </Link>
        <Link
          to="/finder"
          className={location.pathname === '/finder' ? 'active' : ''}
        >
          Find a School
        </Link>
      </nav>
    </header>
  )
}
