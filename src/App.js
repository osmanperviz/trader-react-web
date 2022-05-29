
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles"


import routes from "./routes";
import themeDark from './assets/theme-dark';

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
    <ThemeProvider theme={themeDark}>
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
    
  );
}

export default App;
