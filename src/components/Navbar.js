import React from 'react';
import { Link } from 'react-router-dom';
import SchoolLogo from '../images/schoollogo.jpg';
import { BriefcaseFill, HouseDoorFill, PersonCircle } from 'react-bootstrap-icons';

function Navbar() {
  return (
  <>
  <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">ERPSystem</Link> */}
            <img className='mx-3' src={SchoolLogo} style={{width: '100px', height: '100px'}} alt="Not Found"></img>
            <div>
              <h3 style={{cursor: 'pointer', color: 'brown'}}>HopeWell Valley</h3>
            </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft: '20%', fontWeight: 'bolder'}}>
              <li className="nav-item"> 
                <Link className="nav-link" to="/"><HouseDoorFill /> Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"><BriefcaseFill /> About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login"><PersonCircle /> Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar