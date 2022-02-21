import { width } from "dom-helpers";
import React from "react";
import Satria from "../images/IMG_20220221_104109.jpg";

const About = () => {
  return (
    <div className="container">
      <h2 className="text-center border-bottom mt-3 mb-3 pb-3">Author</h2>
      <div className="card col-sm-3 ms-auto me-auto">
        <div className="card-body d-flex">
          <img
            src={Satria}
            className="justify-content-center w-100"
            alt="img Satria"
          ></img>
        </div>
        <div className="card-body text-center">
          <h6>Kadek Satria Kurniawan</h6>
          <h6>20 years old</h6>
          <a href="https://wa.me/6281331916589">
            <button type="submit" className="btn btn-success col-sm-12">
              Contact
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
