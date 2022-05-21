import React from 'react';
import { Switch , Route } from 'react-router';
import Home from '../Home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Countries from './countries/Countries';
import Courses from './courses/Courses';
import Service from './services/Service';

const HomeRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component= {Home} />
                <Route path="/about" component={About} />
                <Route path="/classes" component={Courses} />
                <Route path="/services" component={Service} />
                <Route path="/countries" component={Countries} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    )
}

export default HomeRouter
