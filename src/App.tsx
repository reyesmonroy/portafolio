import { useEffect, useState } from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";

import "./App.scss";

const App = () => {
  const [error] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        {!loading ? (
          <Switch>
            <Route exact path="/">
              {!error ? (
                <HomePage/>
              ) : (
                <ErrorPage error={error} />
              )}
            </Route>
          </Switch>
        ) : (
          <div className="loader-cont">
            <div className="loader-animation"></div>
          </div>
        )}
      </Router>
      <Footer />
    </div>
  )
}

export default App;
