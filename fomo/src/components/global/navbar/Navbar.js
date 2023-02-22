import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Menu = ({ noLogo }) => {
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
    <header id="header" className={noLogo && "myHeader"}>
      <div className="container">
        {/* nav */}
        <div className={noLogo ? "d-none" : "d-none d-md-block"}>
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
            {/* <button className="nav-subscribe-btn effect">Subscribe</button> */}
            <iframe
              title="subscribe"
              src="https://embeds.beehiiv.com/71db7108-1d1f-4720-851c-77e4ee50363c?slim=true"
              data-test-id="beehiiv-embed"
              frameBorder="0"
              scrolling="no"
              style={{
                magin: "0",
                borderRadius: "0px",
                backgroundColor: "transparent",
              }}
            ></iframe>
          </div>
        </div>

        {/* mobile nav */}
        <div className={noLogo ? "d-block" : "d-md-none"}>
          <div
            className={
              noLogo
                ? "d-flex justify-content-end align-center"
                : "d-flex justify-content-between align-items-center"
            }
          >
            {!noLogo && (
              <Link to="/">
                <img className="logo" src="/images/logo.png" alt="" />
              </Link>
            )}
            <button id="mobile-nav-toggler" onClick={handleShow}>
              <img src="/images/menu.png" width="20px" alt="" />
            </button>
          </div>
          <>
            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="end"
              className={noLogo ? "d-block" : "d-md-none"}
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
