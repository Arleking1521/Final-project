import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "../router";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route => (
                <Route
                    key={route.path}
                    exact={route.exact}
                    path={route.path}
                    element={<route.element />}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
