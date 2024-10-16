import React, { useState } from 'react';

interface MenuProps {
  onContactClick: () => void;
}

export const Menu: React.FC<MenuProps> = ({ onContactClick }) => {
  const [activeMenu, setActiveMenu] = useState<string>('home'); // Set 'home' as the default active menu

  const handleMenuClick = (menuItem: string) => {
    setActiveMenu(menuItem);
    if (menuItem === 'contact') {
      onContactClick();
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg menu__container">
        <div className="container menu__section">
          <a className="navbar-brand" href="#">
            <p>INDIAJOY</p>
            <h2>B2B</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeMenu === 'home' ? 'active' : ''}`}
                  href="#"
                  onClick={() => handleMenuClick('home')}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeMenu === 'contact' ? 'active' : ''}`}
                  href="#"
                  onClick={() => handleMenuClick('contact')}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
