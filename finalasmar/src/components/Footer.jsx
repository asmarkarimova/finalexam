import React from "react";
import "./Footer.css";
import { CiHeart } from "react-icons/ci";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>
              Copyright ©2023 All rights reserved | This template is made with{" "}
              <p className="iconft">
                <CiHeart />
              </p>{" "}
              by <p className="clrlb"> Colorlib</p>{" "}
            </p>
            <div className="wricon">
              <p>
                <AiFillFacebook />
              </p>
              <p>
                <FaTwitterSquare />
              </p>
              <p>
                <BsBootstrapFill />
              </p>
              <p>
                <BsSpotify />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
