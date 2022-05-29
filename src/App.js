
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline";

import Sidenav from './components/Sidenav';
import routes from "./routes";
import themeDark from './assets/theme-dark';
import MainLayout from './components/mainLayout';

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
      <CssBaseline />
     <Sidenav
        color={"primary"}
        brand={"primary"}
        brandName="Duck Bot Trader"
        routes={routes}
        onMouseEnter={() => console.log("on mouse enter")}
        onMouseLeave={() => console.log("on mouse leave")}
      />
      <MainLayout>
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
    
  );
}

export default App;
