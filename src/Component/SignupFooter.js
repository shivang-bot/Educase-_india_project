import React from "react";
import { Link } from "react-router-dom";

function SignupFooter() {
  return (
    <>
      <p className="Daccnt">
        By signing up, you are agree with our&nbsp;
        <Link to="#" className="c-pink tc">
          Terms &amp; Conditions
        </Link>
      </p>
    </>
  );
}

export default SignupFooter;
