import React from 'react';
import PropTypes from 'prop-types'

export default class ToDoItem extends React.Component {

    render(){
        return(
            <div>
                <p>{this.props.todo.title}</p>
            </div>
        );

    }
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
}