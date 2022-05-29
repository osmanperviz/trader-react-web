
import './App.css';
import {Route, Routes, Navigate } from "react-router-dom";
import routes from "./routes";

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

function App() {
  return (
    <Routes>
      {getRoutes(routes)}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
    
  );
}

export default App;
