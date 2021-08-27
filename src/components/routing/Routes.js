import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';

import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import Register_ssb from "../register/RegisterSSB";
import TableTalentaSSB from "../register/TableRegister";
import RegisterEdit from "../register/RegisterEdit";

const Routes = props => {
    return (
        <section className="container">
            <Alert />
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/register-ssb" component={Register_ssb} />
                <Route exact path="/register-ssb/:id" component={RegisterEdit} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register-ssb-list" component={TableTalentaSSB} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />

                <Route component={NotFound} />
            </Switch>
        </section>
    );
};

export default Routes;
