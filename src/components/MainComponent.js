import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Archive from './ArchiveComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';

function Main(props) {
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
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default Main;
