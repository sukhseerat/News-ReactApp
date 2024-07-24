import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsComponent from "./components/NewsComponent";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
   const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" height={2} progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <NewsComponent
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={12}
                country="us"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <NewsComponent
                apiKey={apiKey}
                setProgress={setProgress}
                key="business"
                pageSize={12}
                country="us"
                category="business"
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <NewsComponent
                apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={12}
                country="us"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <NewsComponent
                apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                pageSize={12}
                country="us"
                category="health"
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <NewsComponent
                apiKey={apiKey}
                setProgress={setProgress}
                key="science"
                pageSize={12}
                country="us"
                category="science"
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <NewsComponent
                apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                pageSize={12}
                country="us"
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <NewsComponent
                apiKey={apiKey}
                setProgress={setProgress}
                key="technology"
                pageSize={12}
                country="us"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
