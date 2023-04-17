import React from "react";
import { NavLink } from "react-router-dom";
import user1 from "../assets/img/user1.jpg";
import user2 from "../assets/img/user2.jpg";
import user3 from "../assets/img/user3.jpg";

const Navbar = () => {
  return (
    <>
      <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#">
              <i className="fa fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink to="/" className="nav-link">
              صفحه اصلی
            </NavLink>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <NavLink to="/login" className="nav-link">
              ورود به سیستم
            </NavLink>
          </li>
        </ul>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="fa fa-comments-o"></i>
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
              <a href="#" className="dropdown-item">
                <div className="media">
                  <img
                    src={user1}
                    alt="User Avatar"
                    className="img-size-50 ml-3 img-circle"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">مهدی نینوایی</h3>
                    <p className="text-sm">با من تماس بگیر لطفاً</p>
                    <p className="text-sm text-muted">
                      <i className="fa fa-clock-o mr-1"></i> 4 ساعت قبل
                    </p>
                  </div>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <div className="media">
                  <img
                    src={user2}
                    alt="User Avatar"
                    className="img-size-50 img-circle ml-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">پیمان احمدی</h3>
                    <p className="text-sm">من پیامتو دریافت کردم</p>
                    <p className="text-sm text-muted">
                      <i className="fa fa-clock-o mr-1"></i> 4 ساعت قبل
                    </p>
                  </div>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <div className="media">
                  <img
                    src={user3}
                    alt="User Avatar"
                    className="img-size-50 img-circle ml-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">سارا وکیلی</h3>
                    <p className="text-sm">پروژه اتون عالی بود مرسی واقعاً</p>
                    <p className="text-sm text-muted">
                      <i className="fa fa-clock-o mr-1"></i> 4 ساعت قبل
                    </p>
                  </div>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item dropdown-footer">
                مشاهده همه پیام‌ها
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="fa fa-bell-o"></i>
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fa fa-envelope ml-2"></i> 4 پیام جدید
                <span className="float-left text-muted text-sm">3 دقیقه</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fa fa-users ml-2"></i> 8 درخواست دوستی
                <span className="float-left text-muted text-sm">12 ساعت</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fa fa-file ml-2"></i> 3 گزارش جدید
                <span className="float-left text-muted text-sm">2 روز</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item dropdown-footer">
                مشاهده همه اعلان ها
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
