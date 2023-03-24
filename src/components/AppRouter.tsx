import React from 'react'
import {routes} from "../utils/routes";
import {Routes, Route, Navigate} from "react-router-dom";
import { HOME } from '../utils/path';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {routes.map(({path, Component}) => 
        <Route key={path} path={path} element={<Component />} />  
      )}
      <Route path="*" element={<Navigate to={HOME} />} />
    </Routes>
  )
}

export default AppRouter