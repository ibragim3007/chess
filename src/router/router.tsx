import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { route } from './consts/routesConfig';
import HomePage from '../pages/home';
import GamePage from '../pages/game';

const RouterApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={route.home} element={<HomePage />} />
        <Route path={route.game} element={<GamePage />} />
        <Route path="*" element={<Navigate to={route.home} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
