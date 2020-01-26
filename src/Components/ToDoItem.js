import React from 'react';
import PropTypes from 'prop-types'

export default class ToDoItem extends React.Component {
    getStyle = () => {
        return {
            backgroundColor: (this.props.todo.completed ? 'green' : '#922'),
            textDecoration: (this.props.todo.completed ? 'line-through' : 'none'),
            padding: '10px',
            borderBottom: '1px #ccc dotted'

        }
    }

    render(){
        const {id, title} = this.props.todo
        return(
            <div style = {this.getStyle()}>
                <p>
                    <input type = 'checkbox' onChange = {this.props.markComplete.bind(this, id)}/> {' '}
                    {title}
                </p>
            </div>
        );

    }
}


ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
}