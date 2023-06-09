import React from "react";
import "./NavMenu.css"
import {useLocation, useNavigate} from "react-router-dom";
import {SearchField} from "../searchField/SearchField";

function NavMenu() {
  const navigate = useNavigate()
  const location = useLocation()

  const onBackClick = () => {
    navigate(-1)
  }

  return (
    <div className="navMenu">
      {location.pathname !== "/" &&
          <button
              className="mainButton mainButton-small"
              onClick={onBackClick}
          >
              Back
          </button>
      }
      {location.pathname === "/users" &&
          <SearchField/>
      }
    </div>
  )
}

export {NavMenu};
