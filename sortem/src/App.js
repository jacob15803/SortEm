import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import WhyUseSortem from "./components/WhyUseSortem";
import AboutSortem from "./components/AboutSortem";
import LoginPage from "./components/LoginPage";
import theme from "./theme";
import Dashboard from "./components/DashBoard";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        
        <Routes>
          <Route
            path="/"
            element={
              <><Header />
                
                <AboutSortem />
                <WhyUseSortem />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
