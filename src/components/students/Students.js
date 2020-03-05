import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import StudentsList from './StudentsList/StudentsList'
import StudentForm from './StudentForm/StudentForm'

function Students() {
    const { path } = useRouteMatch();

    return (
        <div>
            <h2>Students</h2>
            <Switch>
                <Route exact path={`${path}/`}>
                    <StudentsList />
                </Route>
                <Route
                    path={`${path}/:id`}
                    render={route => {
                        return <StudentForm id={route.match.params.id} />;
                    }}
                >
                </Route>
            </Switch>
        </div>
    )
}

export default Students
