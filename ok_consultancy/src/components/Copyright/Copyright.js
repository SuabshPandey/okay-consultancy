import React from "react";
import "./Copyright.css";

const Copyright = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="container-fluid copyright">
        <div className="row">
          <div className="col-md-12 tc footer-copyright footer_copyright_text">
            <p className="wc m-0">© {currentYear} &nbsp;ALL &nbsp; RIGHT &nbsp;RESERVED &nbsp; OKAY TRAINING & INTERNATIONAL EDUCATION CONSULTANCY ,&nbsp;  ZETTAMINDS &nbsp; DEVELOPERS</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Copyright;
