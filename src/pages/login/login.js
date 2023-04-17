import React from "react";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen_content">
            <form className="login">
              <div className="login_field">
                <i className="fa fa-user"></i>
                <input
                  type="text"
                  className="login_input"
                  placeholder="نام کاربری"
                />
              </div>
              <div className="login_field">
                <i className="fa fa-lock"></i>
                <input
                  type="password"
                  className="login_input"
                  placeholder="رمز عبور"
                />
              </div>
              <button className="login_submit">
                <span>ورود به سیستم</span>
                <i className="button_icon fa fa-chevron-left"></i>
              </button>
            </form>
            <div className="social_login">
              <h5>ورود از طریق</h5>
              <div className="social_icons">
                <a href="#" className="social_login_icon fa fa-instagram"></a>
                <a href="#" className="social_login_icon fa fa-facebook"></a>
                <a href="#" className="social_login_icon fa fa-twitter"></a>
              </div>
            </div>
          </div>
          <div className="screen_background">
            <span className="screen_background_shape screen_background_shape4"></span>
            <span className="screen_background_shape screen_background_shape3"></span>
            <span className="screen_background_shape screen_background_shape2"></span>
            <span className="screen_background_shape screen_background_shape1"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
