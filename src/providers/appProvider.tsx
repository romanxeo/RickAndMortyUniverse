import React, { FC, useState } from 'react';
import { createContext } from 'react';
import {UserListItem} from "../types/appTypes";


export type AppContext = {
  usersList: UserListItem[];
  setUsersList: (usersList: UserListItem[]) => void
  page: number
  setPage: (page: number) => void
  searchField: string
  setSearchField: (searchField: string) => void
}

export const AppContext = createContext<AppContext>(null);

const AppProvider: FC = ({ children }) => {
  const [usersList, setUsersList] = useState<UserListItem[]>([]);
  const [page, setPage] = useState(1)
  const [searchField, setSearchField] = useState("")

  const value = {
    usersList,
    setUsersList,
    page,
    setPage,
    searchField,
    setSearchField
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
