import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/all";

const Footer = () => {
  return (
    <footer className={"p-footer"}>
      <div className={"d-flex justify-content-between align-items-center"}>
        <div className={"p-3"}>
          <a href="/" className={"text-orange text-logo"}>LifeOpedia!</a>
        </div>
        <div>
          <p className={"text-center text-white m-0"}>Privacy Policy Terms & Conditions</p>
          <p className={"text-center text-orange m-0"}>Copyright &copy; 2020. All rights reserved.</p>
        </div>
        <div className={"text-orange text-right"}>
          <span className={"m-1"}>Connect with us</span>
          <FaFacebook className={"m-1"}/>
          <FaTwitter className={"m-1"}/>
          <FaInstagram className={"m-1 mr-3"}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
