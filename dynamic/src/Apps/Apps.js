import React from "react";
import { Link } from "react-router-dom";

const Apps = () => {
  return (
    <div className="container">
      <div className="row">
        <h2> Apps </h2>
      </div>
      <div className="row">
        <div className="col-sm">
          <ul>
            <li> <Link to="/apps/stars"> Stars </Link> </li>
            <li> <Link to="/apps/lynx"> Lynx </Link> </li>
            <li> <Link to="/apps/stars"> Gym Form </Link> </li>
          </ul>
        </div>
        <div className="col-sm">
          <ul>
            <li> <Link to="/apps"> app01 </Link> </li>
            <li> <Link to="/apps"> app02 </Link> </li>
            <li> <Link to="/apps"> app03 </Link> </li>
            <li> <Link to="/apps"> app04 </Link> </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Apps;
