import React from "react";
import {NavMenu} from "../navMenu/NavMenu";

function Header () {
  return (
    <div className="header">
      <div>
        <img src="https://storage.googleapis.com/coderpad_project_template_assets/coderpad_logo.svg" alt=""/>
      </div>
      <NavMenu />
      <div>
        <img src="https://storage.googleapis.com/coderpad_project_template_assets/react.svg" alt=""/>
        <span>React App</span>
      </div>
    </div>
  )
}

export {Header};
