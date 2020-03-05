import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import propTypes from 'prop-types'
import { saveStudent, removeStudent } from '../../../store/actions/students'
import './StudentForm.css';

function StudentForm({ item, groups, onSave, onDelete }) {

    const [firstName, setFirstName] = useState(item.firstName);
    const [lastName, setLastName] = useState(item.lastName);
    const [groupId, setGroupId] = useState(item.groupId);

    const history = useHistory();

    const onClickSave = () => {
        onSave({
            id: item.id,
            firstName,
            lastName,
            groupId
        });
        history.goBack();
    }

    const onClickDelete = () => {
        onDelete(item.id);
        history.goBack();
    }

    const onNameChange = (e) => {
        setFirstName(e.target.value);
    }

    return (
        <div className="form">
            <div className="form__row">
                <div className="form__title">
                    <span>Student card</span>
                </div>
                {item.id ?
                    <button
                        className="btn__del"
                        onClick={onClickDelete}
                    >
                        <img src="https://i.imgur.com/rL3xgNI.png" alt="" width="18" />
                    </button>
                    :
                    null}
            </div>
            <div className="form__row">
                <div className="form__label"><span>First name</span></div>
                <input
                    className="form__input"
                    type="text"
                    value={firstName}
                    onChange={onNameChange}
                />
            </div>
            <div className="form__row">
                <span className="form__label">Last name</span>
                <input
                    className="form__input"
                    type="text"
                    value={lastName}
                    onChange={({ target }) => setLastName(target.value)}
                />
            </div>
            <div className="form__row">
                <span className="form__label">Group</span>
                <select
                    className="form__select"
                    name="groupId"
                    value={groupId}
                    onChange={({ target }) => setGroupId(target.value)}
                >
                    {groups.map(group => (
                        <option
                            key={group.id}
                            value={group.id}
                        >
                            {group.name}
                        </option>
                    ))
                    }
                </select>
            </div>
            <div className="form__actions">
                <button
                    className="btn btn__back"
                    onClick={() => { history.goBack() }}
                >Back</button>
                <button
                    className="btn btn__save"
                    onClick={onClickSave}
                >Save</button>
            </div>
        </div>
    )
}

function mapStateToProps({ groups, students }, { id }) {
    const item = (id === 'new' || students.list.findIndex(item => item.id.toString() === id) === -1)
        ? { id: '', firstName: '', lastName: '', groupId: groups.list[0].id }
        : students.list.find(item => item.id.toString() === id);
    return {
        item,
        groups: groups.list
    };
}

const mapDispatchToProps = {
    onSave: saveStudent,
    onDelete: removeStudent
}

StudentForm.propTypes = {
    item: propTypes.object,
    onDelete: propTypes.func,
    onSave: propTypes.func,
    groups: propTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
