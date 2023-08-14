import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { route } from './consts/routesConfig';
import HomePage from '../pages/home';

const RouterApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={route.home} element={<HomePage />} />
        <Route path={route.game} element={<h1>Game</h1>} />
        <Route path="*" element={<Navigate to={route.home} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
