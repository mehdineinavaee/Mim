import React from "react";

const Breadcrumb = () => {
  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>تعاریف پایه</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-left">
                <li className="breadcrumb-item">
                  <a href="#">صفحه اصلی</a>
                </li>
                <li className="breadcrumb-item active">تعاریف پایه</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
