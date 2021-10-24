import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';

import Details from './components/Details';
import Entry from './components/Entry';
import History from './components/History';
import Record from './components/History/id/Record';

function App() {
   return (
      <Router>
         <div className="App">
            <Toaster position="top-right" />
            <Switch>
               <Route component={Entry} path="/" exact />
               <Route component={Details} path="/details" />
               <Route component={History} path="/history" exact />
               <Route component={Record} path="/history/:record_id" />
            </Switch>
         </div>
      </Router>
   );
}

export default App;
