import React from "react";
import instagram from "../componentes/images/instagram.svg";
import twitter from "../componentes/images/twitter.svg";
import github from "../componentes/images/github.svg";

const Footer = () => {
  return (
    <footer className="container-fluid color-navbar">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Nicolas Pereyra ® Proyecto React JS CoderHouse</p>
          </div>
          <div className="col-md-6 footer-social">
            <a href="http://www.instagram.com/niico.pereyra" target="__blank">
              <img src={instagram} alt="Instagram" className="footer-img" />
            </a>
            <a href="http://www.twitter.com/niiicopereyra" target="__blank">
              <img src={twitter} alt="Twitter" className="footer-img" />
            </a>
            <a href="https://github.com/NicoDewloren" target="__blank">
              <img src={github} alt="GitHub" className="footer-img" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
