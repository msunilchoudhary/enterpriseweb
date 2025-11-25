import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="page-not-found p-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <img src="/images/page404.png" width="300" alt="" />
            <h1>Page Not Found</h1>
            <p>
              We searched the space, but we couldn't find the page you're
              looking for.
            </p>
            <Link to="/" className="btn btn-primary">
              Go To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
