import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegistrationLogin from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';

import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import RegistrationForm from "../register/RegistrationForm";
import RegistrationList from "../register/RegistrationList";
import RegistrationEdit from "../register/RegistrationFormEdit";

const Routes = props => {
    return (
        <section className="container">
            <Alert />
            <Switch>
                <Route exact path="/register" component={RegistrationLogin} />
                <Route exact path="/register-form" component={RegistrationForm} />
                <Route exact path="/register/:id" component={RegistrationEdit} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register-list" component={RegistrationList} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />

                <Route component={NotFound} />
            </Switch>
        </section>
    );
};

export default Routes;
