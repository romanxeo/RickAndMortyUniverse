import React, {useContext} from "react";
import {AppContext} from "../../providers/appProvider";
import {useQuery} from "@apollo/client";
import {GET_CHARACTERS} from "../../queries/userQueries";
import {UserListItem} from "../../widgets/userListItem/UserListItem";
import {Loader} from "../../modules/loader/Loader";
import {Pagination} from "../../widgets/pagination/Pagination";

function UsersList () {
  const {
    usersList,
    setUsersList,
    page,
    searchField
  } = useContext(AppContext);

  const { loading } = useQuery(GET_CHARACTERS(page, searchField), {
    onCompleted: (data) => {
      setUsersList(data.characters.results);
    }
  })

  const userListItems = usersList.map(user => (
    <UserListItem key={user.id} user={user}/>
  ))

  return (
    <div className="page page-scroll gap">
      {userListItems}
      {loading
        ? <Loader />
        : (usersList.length === 0
          ? <div>No data.</div>
          : <Pagination />
        )
      }
    </div>
  )
}

export {UsersList};
