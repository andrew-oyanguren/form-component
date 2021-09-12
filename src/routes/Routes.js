import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../pages/HomePage';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>

      <Route path='/home'>
        <HomePage />
      </Route>
      
      <Route path='/*'>
        <Redirect to='/home' />
      </Route>
    </Switch>
  );
};

export default Routes;