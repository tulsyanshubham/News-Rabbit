import React from 'react'
// import {useState} from 'react'
// import PropTypes from 'prop-types'
import {  Link } from 'react-router-dom';

const Navbar = (props) => {
  // static propTypes = {
  //   prop: PropTypes
  // }
  // style={{position : 'fixed', width : '100%', top : 0, zIndex : 2}}

  // const [text, setText] = useState("");

  // const handleOnChange = (event) => {
  //   // console.log("Change Handled");
  //   setText(event.target.value);
  //   // console.log(event.target.value);
  // };

  // const sendValue = (props) => {
  //   props.value = text;
  //   // console.log(props.value)
  //   return props.value;
  // }

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/News-Rabbit">News Rabbit</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/News-Rabbit">Home</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Countries
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">India</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/">Argentina</Link></li>
                  <li><Link className="dropdown-item" to="/">Australia</Link></li>
                  <li><Link className="dropdown-item" to="/">Germany</Link></li>
                  <li><Link className="dropdown-item" to="/">Japan</Link></li>
                  <li><Link className="dropdown-item" to="/">New Zealand</Link></li>
                  <li><Link className="dropdown-item" to="/">Russia</Link></li>
                  <li><Link className="dropdown-item" to="/">Singapore</Link></li>
                  <li><Link className="dropdown-item" to="/">South Africa</Link></li>
                  <li><Link className="dropdown-item" to="/">South Korea</Link></li>
                  <li><Link className="dropdown-item" to="/">United Kingdom</Link></li>
                  <li><Link className="dropdown-item" to="/">United States</Link></li>
                </ul>
              </li> */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/News-Rabbit/business">Business</Link></li>
                  <li><Link className="dropdown-item" to="/News-Rabbit/entertainment">Entertainment</Link></li>
                  <li><Link className="dropdown-item" to="/News-Rabbit/health">Health</Link></li>
                  <li><Link className="dropdown-item" to="/News-Rabbit/science">Science</Link></li>
                  <li><Link className="dropdown-item" to="/News-Rabbit/sports">Sports</Link></li>
                  <li><Link className="dropdown-item" to="/News-Rabbit/technology">Technology</Link></li>
                </ul>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{marginRight:'1vw', color:'white'}}>Dark Mode</label>
            </div>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={handleOnChange}/>
              <div className="btn-class" onClick={sendValue}>Search</div>
              <button className="btn-class" onClick={sendValue}>Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
