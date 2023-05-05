import React from "react";
import "./blog.scss";
import Header from "../header/header";

function Blog() {
  return (
    <>
      <Header />
      <div className="blog">
        <div className="container">
          <div className="col-12">
            <div className="d-flex w-100 col-lg-5">
              <div className="wrappe">
                <img src="./404.gif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Blog;
