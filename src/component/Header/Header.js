import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="shadow">
      <nav style={{ marginLeft: "40px" }} className="  navbar navbar-expand-lg navbar-light">
        <div className=" container-fluid">
          <a className="fw-bold fs-1 navbar-brand" href="#">Ninja Riders</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div style={{ marginLeft: "750px" }} className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="fw-bold nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <Link className=" nav-link" to="/destination">Destination</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
            </Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>


    </div>
  );
};

export default Header;

