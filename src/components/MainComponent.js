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
      <Switch>
        <Route exact path="/archive" component={Archive} />
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default Main;
