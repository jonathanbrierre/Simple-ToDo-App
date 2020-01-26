import React from 'react';
import PropTypes from 'prop-types'

export default class ToDoItem extends React.Component {
    getStyle = () => {
        return {
            backgroundColor: (this.props.todo.completed ? 'green' : '#922'),
            textDecoration: (this.props.todo.completed ? 'line-through' : 'none'),
            padding: '10px',
            borderBottom: '1px black dotted'

        }
    }

    render(){
        const {id, title, completed} = this.props.todo
        return(
            <div style = {this.getStyle()}>
                <p>
                    <input type = 'checkbox' onChange = {this.props.markComplete.bind(this, id)}/> {' '}
                    {title} {' '}
                    <button style = {btnStyle} onClick = {this.props.deleteTodo.bind(this,id)}>Delete</button>
                </p>
            </div>
        );

    }
}

const btnStyle  = {
    borderRadius: '5px'
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
}