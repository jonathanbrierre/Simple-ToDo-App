import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div style = {headerStyle}>
                To Do List
            </div>
        )
    }
}
const headerStyle = {
    textAlign: 'center',
    padding: '20px',
    fontSize: '2em',
    backgroundColor: '#FFF6DB'
}
export default Header
