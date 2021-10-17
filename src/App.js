import { Switch, Route, useHistory,BrowserRouter as Router, } from "react-router-dom";
import routes from "./routes";

import isAuthenticated from "./utils/isAuthenticated";
import { GlobalProvider } from "./context/Provider";

const RenderRoute = (route) => {
  const history = useHistory();

  document.title = route.title || "React App";
  if (route.needsAuth && !isAuthenticated()) {
    history.push("/");
  }

  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    ></Route>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalProvider>
        <Switch>
            {routes.map((route, index) => (
              <RenderRoute {...route} key={index} />
            ))}
          </Switch>
        </GlobalProvider>
      </Router>
    </div>
  );
}

export default App;
