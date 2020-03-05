import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import GroupsList from './GroupsList/GroupsList'
import GroupForm from './GroupForm/GroupForm';
import './Groups.css';

function Groups() {
    const { path } = useRouteMatch();

    return (
        <div>
            <h2>Groups</h2>
            <Switch>
                <Route exact path={`${path}/`}>
                    <GroupsList />
                </Route>
                <Route
                    path={`${path}/:id`}
                    render={route => {
                        return <GroupForm id={route.match.params.id} />;
                    }}
                >
                </Route>
            </Switch>
        </div>
    )
}

export default Groups
