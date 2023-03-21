import React from "react";
import { Link } from "react-router-dom";

function FooterInfo() {
  return (
    <>
      <p className="Daccnt">
        Don't have an account?
        <span className="c-pink">&nbsp;Create new now!</span>
      </p>
      <p className="Daccnt">
        By signing up, you are agree with our&nbsp;
        <Link to="#" className="c-pink tc">
          Terms &amp; Conditions
        </Link>
      </p>
    </>
  );
}

export default FooterInfo;
