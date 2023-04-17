import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import user from "../assets/img/user.jpg";
import { NavLink } from "react-router-dom";
import { getNavigates } from "../services/navigates";

const Sidebar = () => {
  const [navigates, setNavigates] = useState([]);

  useEffect(() => {
    setNavigates([...getNavigates()]);
  }, []);

  const getIconClasses = (icon) => {
    let classes = "nav-icon fa fa-";
    classes += icon;
    return classes;
  };

  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/#" className="brand-link">
          <img
            src={logo}
            alt="Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">پنل مدیریت</span>
        </a>

        <div className="sidebar">
          <div>
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src={user}
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="/#" className="d-block">
                  مهدی نینوایی
                </a>
              </div>
            </div>

            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {navigates.map((item, i) => (
                  <li key={i} className="nav-item has-treeview">
                    <a href="/#" className="nav-link">
                      <i className={getIconClasses(item.icon)}></i>
                      <p>
                        {item.text}
                        <i className="right fa fa-angle-left"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      {item.sub_nav?.map((sub_item, j) => (
                        <li key={j} className="nav-item">
                          <NavLink to={sub_item.navigate} className="nav-link">
                            <i className="fa fa-circle-o nav-icon"></i>
                            <p>{sub_item.text}</p>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
