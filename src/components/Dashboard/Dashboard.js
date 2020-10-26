import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import Homepage from './Homepage'
import About from '../Pages/About'
import Resume from '../Pages/Resume'

const Dashboard = () => {
    return (
        <section class="hero has-background-dark is-fullheight">
          <div class="hero-body">
            <div class="container">
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/resume' component={Resume} />
                </Switch>
            </div>
          </div>
        </section>
    );
}

export default Dashboard;

