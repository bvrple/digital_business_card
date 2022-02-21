import React from "react";
import { Instagram, Github, Twitter, Linkedin } from "react-bootstrap-icons";

function Footer() {
  return (
    <div className="Footer">
      <Github className="Socials" color="white" size={30} />
      <Linkedin className="Socials" color="white" size={30} />
      <Instagram className="Socials" color="white" size={30} />
      <Twitter className="Socials" color="white" size={30} />
    </div>
  );
}

export default Footer;
