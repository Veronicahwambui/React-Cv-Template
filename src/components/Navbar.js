import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'


export default function Navbar() {
  return (
    <>
<nav className='light-blue darken-4'>
  <div className='container'>
    <div className='nav-wrapper'>
      <Link to='/' className='brand-log'> CV
      </Link>
      <Link to='/' data-target='side-nav' className='sidenav-trigger'>
        <i className='material-icons'> menu</i>
      </Link>
      <ul className="right hide-on-med-and-down">
        <li>
          <Link to="/">
            <i class="fas fa-home">Home</i>
          </Link>
        </li>
        <li>
          <Link to="/skills">
            <i class="fas fa-copy">Skills</i>
          </Link>
        </li>

        <li>
          <Link to="/experiences">
            <i class="fas fa-id-badge">Experiences</i>
          </Link>
        </li>

        <li>
          <Link to="/educstions">
            <i class="fas fa-graduation-cap">Educations</i>
          </Link>
        </li>

        <li>
          <Link to="/portfolios">
            <i class="fas fa-address-card">Portfolios</i>
          </Link>
        </li>

      </ul>
  
  
    </div>
    
  </div>

</nav>

<ul className="sidenav" id='side-nav'>
        <li>
          <Link to="/">
            <i class="fas fa-home">Home</i>
          </Link>
        </li>
        <li>
          <Link to="/skills">
            <i class="fas fa-copy">Skills</i>
          </Link>
        </li>

        <li>
          <Link to="/experiences">
            <i class="fas fa-id-badge">Experiences</i>
          </Link>
        </li>

        <li>
          <Link to="/educstions">
            <i class="fas fa-graduation-cap">Educations</i>
          </Link>
        </li>

        <li>
          <Link to="/portfolios">
            <i class="fas fa-address-card">Portfolios</i>
          </Link>
        </li>

      </ul>




    </>
  )
}
