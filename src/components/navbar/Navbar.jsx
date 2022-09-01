import React, { useState } from 'react'
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/pg.png';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#about">About</a></p>
    <p><a href="#project">Projects</a></p>
    <p><a href="#contact">Contact</a></p>`
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="pg__navbar"> 
      <div className="pg__navbar-links">
        <div className="pg__navbar-menu">
          {toggleMenu
          ? <RiCloseLine color="#808080" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenuFill color="#808080" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="pg__navbar-menu_container"> 
              <div className="pg__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        <div className="pg__navbar-links_container">
          <p><a href="#home"><img src={logo} alt="logo" /></a></p>
          <Menu />
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar