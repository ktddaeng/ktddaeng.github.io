import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Archive from './ArchiveComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';

function Main() {
  const HomePage = () => {
    return (
      <Home/>
    );
  }

  return (
    <div>
      <Header/>
      <div className="container">
        <Switch>
          <Route exact path="/archive" component={Archive} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default Main;
