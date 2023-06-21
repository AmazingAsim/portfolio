import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav className="navbar nav bg-white navbar-expand-sm p-2">
           <Link to='/' className='navbar-brand'>AmazingAsim</Link>
           <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link to='/' className='nav-link'>Dashboard</Link></li>
              <li className="nav-item"><Link to='work' className='nav-link'>Projects</Link></li>
              <li className="nav-item"><Link to='certificate' className='nav-link'>Certificates</Link></li>
           </ul>
        </nav>
    </div>
  )
}
