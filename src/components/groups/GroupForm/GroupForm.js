import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import propTypes from 'prop-types'
import { saveGroup, removeGroup } from '../../../store/actions/groups'
import { removeGroupStudents } from '../../../store/actions/students'
import './GroupForm.css';

function GroupForm({ item, onSave, onDeleteGroup, onDeleteStudents }) {

    const [name, setName] = useState(item.name);

    const history = useHistory();

    const onClickSave = () => {
        onSave({
            id: item.id,
            name
        });
        history.goBack();
    }

    const onClickDelete = () => {
        if (window.confirm('Are you sure to delete this group with all students?')) {
            onDeleteGroup(item.id);
            onDeleteStudents(item.id);
            history.goBack();
        }
    }

    return (
        <div className="form">
            <div className="form__row">
                <div className="form__title">
                    <span>Group card</span>
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
                <div className="form__label"><span>Group name</span></div>
                <input
                    className="form__input"
                    type="text"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                />
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

function mapStateToProps({ groups }, { id }) {
    if (id === 'new' || groups.list.findIndex(item => item.id.toString() === id) === -1)
        return {
            item: { id: '', name: '' }
        }
    return {
        item: groups.list.find(item => item.id.toString() === id)
    }
}

const mapDispatchToProps = {
    onSave: saveGroup,
    onDeleteGroup: removeGroup,
    onDeleteStudents: removeGroupStudents
}

GroupForm.propTypes = {
    item: propTypes.object,
    onDelete: propTypes.func,
    onDeleteStudents: propTypes.func,
    onSave: propTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
