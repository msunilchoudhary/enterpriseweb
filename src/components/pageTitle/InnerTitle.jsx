import React from "react";
import Breadcrumbs from "./breadcrumbs";

function InnerTitle({ title }) {
  return (
    <div className="page-title-wrap px-5 py-5">
      <div className="container-fluid">
        <div className="title-wrap">
          <h1>{title}</h1>
          <Breadcrumbs title={title} />
        </div>
      </div>
    </div>
  );
}

export default InnerTitle;
