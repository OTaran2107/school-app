import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import './GroupsList.css';

function GroupsList({ list }) {
    const { url } = useRouteMatch();

    return (
        <div>
            <Link className="btn add__btn" to={`${url}/new`}>Add group</Link>
            <ul>
                {list.map(item =>
                    <li
                        key={item.id}>
                        <Link to={`${url}/${item.id}`}>
                            {item.name}
                        </Link>
                    </li>)}
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        list: state.groups.list
    }
}

export default connect(mapStateToProps)(GroupsList);
