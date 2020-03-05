import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import StudentsListItem from './StudentsListItem'
import './StudentsList.css';

function StudentsList({ students, groups }) {

    const { url } = useRouteMatch();

    return (
        <div>
            <Link className="btn add__btn" to={`${url}/new`}>Add student</Link>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Group</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(item =>
                        <StudentsListItem key={item.id} student={item} groups={groups} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

StudentsList.propTypes = {
    students: propTypes.array,
    groups: propTypes.array
};

function mapStateToProps(state) {
    return {
        students: state.students.list,
        groups: state.groups.list
    }
}

export default connect(mapStateToProps)(StudentsList);