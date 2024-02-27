// Header.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <body>
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <NavLink to="/" className="navbar-brand">
          <img src="/images/logodiv1.png" className="card-img-logo" alt="Podcast Title" />
        </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active-link">Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/decouvrir" className="nav-link" activeClassName="active-link">Découvrir</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mes-abonnements" className="nav-link" activeClassName="active-link">Mes Abonnements</NavLink>
            </li>
          </ul>
          
          {/* Utiliser ml-auto pour aligner à droite */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link" activeClassName="active-link">Connexion</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </body>
);

export default Header;
