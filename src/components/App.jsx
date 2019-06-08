import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Hashtag from 'pages/Hashtag';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/hashtag/:tag" component={({ history, location, match }) => <Hashtag tag={match.params.tag} />} />
    </Switch>
  );
}

export default App;
