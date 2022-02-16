import React from "react";
import {
	Redirect,
	Route,
	Switch,
  BrowserRouter
} from 'react-router-dom';
import './styles/layout.scss';
import HomePage from "./Views/Pages/HomePage";
import GalleryPage from "./Views/Pages/GalleryPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Redirect exact={true} from={`/`} to={'/Home'} />
          <Route path={'/Home'} component={HomePage} />
          <Route path={'/Gallery'} component={GalleryPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
