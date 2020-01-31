import React, { Component } from 'react'

export class Search extends Component {

    onChange = (e) => {
        this.props.changeStateSearch(e)
    }
    render() {
        return (
            <form style={{width: '100%'}}>
                <input
                    name = 'search'
                    value ={this.props.search}
                    onChange = {this.onChange}
                    placeholder = {'Search for a task...'}
                />
            </form>
        )
    }
}

export default Search
