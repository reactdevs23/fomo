import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Menu = () => {
  const menus = [
    {
      name: "News",
      link: "/news",
    },
    {
      name: "Magazine",
      link: "/magazine",
    },
    {
      name: "Youtube",
      link: "/youtube",
    },
  ];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header id="header">
      <div className="container">
        {/* nav */}
        <div className="d-none">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/">
              <img className="logo" src="/images/logo.png" alt="" />
            </Link>
            <nav>
              <ul>
                {menus.map((menu, index) => (
                  <li className="link" key={index}>
                    <NavLink
                      to={menu.link}
                      className={({ isActive }) =>
                        isActive
                          ? "text-decoration-none navsActive"
                          : "text-decoration-none "
                      }
                    >
                      {menu.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <button className="nav-subscribe-btn effect">Subscribe</button>
          </div>
        </div>

        {/* mobile nav */}
        <div className="">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/">
              <img className="logo" src="/images/logo.png" alt="" />
            </Link>
            <button id="mobile-nav-toggler" onClick={handleShow}>
              <img src="/images/menu.png" width="20px" alt="" />
            </button>
          </div>
          <>
            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="end"
              className=""
            >
              <Offcanvas.Header className="border-bottom">
                <Offcanvas.Title>Menu</Offcanvas.Title>
                <img
                  onClick={handleClose}
                  src="/images/cancel.png"
                  width="20px"
                  alt=""
                />
              </Offcanvas.Header>
              <Offcanvas.Body>
                <nav id="mobile-nav">
                  <ul className="mobile-nav-ul">
                    {menus.map((menu, index) => (
                      <li
                        className="link w-auto d-block py-2"
                        key={index}
                        onClick={handleClose}
                      >
                        <Link className="text-decoration-none" to={menu.link}>
                          {menu.name}
                        </Link>
                      </li>
                    ))}

                    <li>
                      <button className="nav-subscribe-btn effect mt-2">
                        Subscribe
                      </button>
                    </li>
                  </ul>
                </nav>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        </div>
      </div>
    </header>
  );
};

export default Menu;
