import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from 'pages/Main';
import HashtagPage from 'pages/Hashtag';
import LinkPage from 'pages/Link';
import GroupPage from 'pages/Group';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/hashtag/:tag" component={({ history, location, match }) => <HashtagPage tag={match.params.tag} />} />
      <Route exact path="/groups" component={GroupPage} />
      <Route exact path="/links" component={LinkPage} />
    </Switch>
  );
}

export default App;
