import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='sticky-top'>
        <nav className="navbar bg-white navbar-expand-sm p-2">

           <Link to='/' className='navbar-brand'>AmazingAsim</Link>
           <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#asim"><i className="navbar-toggler-icon"></i></button>
           <div className="collapse navbar-collapse" id='asim'>

           <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link to='/' className='nav-link'>Dashboard</Link></li>
              <li className="nav-item"><Link to='work' className='nav-link'>Projects</Link></li>
              <li className="nav-item"><Link to='certificate' className='nav-link'>Certificates</Link></li>
           </ul>
           </div>
        </nav>
    </div>
  )
}
