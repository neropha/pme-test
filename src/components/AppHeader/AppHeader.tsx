import React, { FC } from "react";
import header from "../../assets/img/header.jpg";
import user from "../../data/user";
import userPicture from "../../assets/img/user-default.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <header className="AppHeader">
    <img src={header} alt="Frau redet mit Mädchen" className="HeaderImg d-none d-md-block" />
    <div className="UserBox">
      <div className="UserPicture">
        <figure className="border border-primary border-3 overflow-hidden rounded-circle mb-0">
          <img src={userPicture} alt="Profilbild" width="100%" />
        </figure>
          <a className="UserEditLink rounded-circle bg-secondary"><FontAwesomeIcon icon="pen" /></a>
      </div>
      <div className="UserName h3">
        {user.firstname} {user.lastname}
      </div>
    </div>
  </header>
);

export default Header;
