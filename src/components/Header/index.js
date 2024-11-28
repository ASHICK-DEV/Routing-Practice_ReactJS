// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="styling">
    <div className="row-styling-2">
      <div className="row-styling">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="image"
        />
        <h1 className="wave-heading">Wave</h1>
      </div>
      <div className="row-styling">
        <Link to="/" className="wave-heading">
          Home
        </Link>

        <Link to="/about" className="wave-heading">
          About
        </Link>

        <Link to="/contact" className="wave-heading">
          Contact
        </Link>
      </div>
    </div>
  </nav>
)

export default Header
