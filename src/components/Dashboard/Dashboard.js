import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "../Pages/About";
import Resume from "../Pages/Resume";
import Works from "../Pages/Works";
// import Testimonials from '../Pages/Testimonials'

const Dashboard = () => {
  return (
    <section class="hero has-background-dark is-fullheight">
      <div class="hero-body">
        <div class="container is-widescreen">
          <Switch>
            <Route exact path="/resume/" component={Homepage} />
            <Route exact path="/resume/about" component={About} />
            <Route exact path="/resume/resume" component={Resume} />
            <Route exact path="/resume/works" component={Works} />
            {/* <Route exact path='/resume/testimonials' component={Testimonials} /> */}
          </Switch>
        </div>
      </div>
      <footer className="footer has-background-grey-dark">
        <div className="content has-text-centered">
          <p className="has-text-grey">
            Handcrafted by Douglas
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Dashboard;
