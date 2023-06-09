import React from "react";
import {UserListItem as UserListItemType} from "../../types/appTypes"
import {useNavigate} from "react-router-dom";

type propsType = {
  user: UserListItemType
}

function UserListItem (props: propsType) {
  const {
    user,
  } = props

  const navigate = useNavigate()

  const onDetailClick = () => {
    navigate(`/user/${user.id}`)
  }

  return (
    <div className="UserItem__wrapper UserItem__body gap">
      <img className="UserItem__avatar" src={user.image} alt="avatar" />
      <div className="UserItem__infoBlock">
        <p><b>Name: </b>{user.name}</p>
        <p><b>Species: </b>{user.species}</p>
        <p><b>Status: </b>{user.status}</p>
        <button
          className="mainButton mainButton-small"
          onClick={onDetailClick}
        >
          View detail
        </button>
      </div>
    </div>
  )
}

export {UserListItem};
