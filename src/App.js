import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { FeedCardList } from './component/FeedCardList'
import { FeedCardDetail } from './component/FeedCardDetail'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/cards" exact={true} component={FeedCardList}/>
        <Route path="/card/:id" exact={true} render={({location, match}) =>
          location.state && match.params.id === location.state.card.id?
          <FeedCardDetail card={location.state.card}/> :
          <Redirect to="/cards" />
        }/>
        <Redirect to="/cards" />
      </Switch>
    </Router>
  )
}

export default App;
