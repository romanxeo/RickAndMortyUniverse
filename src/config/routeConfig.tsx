import { RouteProps } from 'react-router-dom';
import {MainPage} from "../pages/mainPage/MainPage";
import {UsersList} from "../pages/usersList/UsersList";
import {UserDetail} from "../pages/userItem/UserDetail";
import React from 'react';

export enum Routers {
  MAIN = 'main',
  USERS = 'users',
  USER = 'user',
}

export const routerConfig: Record<Routers, RouteProps> = {
  [Routers.MAIN]: {
    path: '/',
    element: <MainPage />,
  },
  [Routers.USERS]: {
    path: '/users',
    element: <UsersList />,
  },
  [Routers.USER]: {
    path: '/user/:id',
    element: <UserDetail />,
  },
};
