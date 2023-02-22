import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Menu = () => {
  const menus = [
    {
      name: "Buy Fomo Magazine",
      link: "#",
    },
    {
      name: "Youtube",
      link: "#",
    },
  ];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header id="header">
      <div className="container">
        {/* nav */}
        <div className="d-none d-md-block">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/">
              <img className="logo" src="/images/logo.png" alt="" />
            </Link>
            <nav>
              <ul>
                {menus.map((menu, index) => (
                  <li className="link" key={index}>
                    <a
                      href={menu.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none navsActive text-decoration-none "
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button className="nav-subscribe-btn effect">Subscribe</button>
          </div>
        </div>

        {/* mobile nav */}
        <div className="d-md-none">
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
              className="d-md-none"
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
                        <a
                          className="text-decoration-none"
                          target="_blank"
                          rel="noreferrer"
                          href={menu.link}
                        >
                          {menu.name}
                        </a>
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
