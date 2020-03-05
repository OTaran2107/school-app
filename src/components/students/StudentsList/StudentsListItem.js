import React from 'react'
import './StudentsList.css';
import { useRouteMatch, Link } from 'react-router-dom'

function StudentsListItem({ student, groups }) {

    const { id, firstName, lastName, groupId } = student;

    const { url } = useRouteMatch();

    // eslint-disable-next-line eqeqeq
    const group = groups.find((item) => (item.id == groupId));

    return (
        <tr key={id}>
            <td style={{ width: '150px' }}>{firstName}</td>
            <td style={{ width: '150px' }}>{lastName}</td>
            <td style={{ width: '100px' }}>{group ? group.name : ''}</td>
            <td>
                <button className="btn edit__btn">
                    <Link to={`${url}/${id}`}>Edit</Link>
                </button>
            </td>
        </tr>
    )
}

export default StudentsListItem
