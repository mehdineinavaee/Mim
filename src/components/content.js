import React from "react";
import Breadcrumb from "./breadcrumb";
import My_routes from "../services/routes";

const Content = () => {
  return (
    <>
      <div className="content-wrapper">
        <Breadcrumb />
        <section className="content">
          <div className="container-fluid">
            <div className="card card-default">
              <div className="card-body">
                <div className="row">
                  <My_routes />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Content;
