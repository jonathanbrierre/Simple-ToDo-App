import React, { Component } from 'react'

export class AddToDo extends Component {
    state = {
        title : ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state)
        this.setState({title: ''})
    }
    render() {
        return (
            <form onSubmit = {this.onSubmit} style = {{ backgroundColor: '#333', display: 'flex'}}>
                <input 
                    type = 'text'
                    name= 'title'
                    placeholder = 'Add a task...'
                    style = {{flex: 10}}
                    value = {this.state.title}
                    onChange = {this.onChange}
                />
                <input 
                    type = 'submit'    
                    value = 'submit'
                    style = {{flex: 1}}
                />
            </form>
        )
    }
}

export default AddToDo
