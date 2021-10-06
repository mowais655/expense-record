
import './App.css';

  import React,{ Component } from 'react'
  import { Route, Switch } from 'react-router-dom';
  import CostTable from './Components/CostTable';
  import Main from './Components/main';
  
  const App = () => {
      return (
      <div>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/add-costtable' component={CostTable} />
          </Switch>
      </div>
    )
  }
  
  export default App;
  

