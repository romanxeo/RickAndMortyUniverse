import React from "react";
import {NavLink} from "react-router-dom";

function MainPage() {
  return (
    <div className="page">
      <NavLink to={"/users"} className="mainButton">
        View users
      </NavLink>
    </div>
  )
}

export {MainPage};
