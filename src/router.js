import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './components/Home'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
        </Switch>
    );
};

export default Router;