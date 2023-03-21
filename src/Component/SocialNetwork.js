import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function SocialNetwork() {
  return (
    <div className="socialNetwork">
      <Link to="#">
        <FcGoogle />
      </Link>
      <Link to="#" className="fbIcon">
        <FaFacebookF />
      </Link>
      <Link to="#" className="twitterIcon">
        <BsTwitter />
      </Link>
    </div>
  );
}

export default SocialNetwork;
