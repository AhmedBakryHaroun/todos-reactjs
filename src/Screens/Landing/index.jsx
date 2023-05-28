import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

//
const Landing = () => {
  return (
    <main className=" landing py-5">
      <div className="banner p-4 p-md-5 mb-4 rounded ">
        <div className="col-md-10 col-lg-8 px-0 my-5 py-2 mx-auto text-center">
          <h1 className="text-light display-2 fst-italic fw-bold">
            MERN Stack Blog
          </h1>
          <p className="lead my-3 fw-bold text-light mb-4">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s
            contents.
          </p>
          <p className="lead mb-0">
            <Link
              to="/home"
              className="btn px-5 btn-lg btn-light text-dark fw-bold"
            >
              My Todos
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Landing;
