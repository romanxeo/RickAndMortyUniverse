import React from 'react';
import { FC, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {routerConfig} from "../config/routeConfig";
import {Loader} from "../modules/loader/Loader";

const RouterProvider: FC = () => {
  const routers = Object.values(routerConfig).map(({ element, path }) => (
    <Route key={path} path={path} element={element} />
  ));

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routers}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Suspense>
  );
};

export default RouterProvider;
