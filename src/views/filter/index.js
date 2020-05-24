import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <p className="filter-header">Filter by name or description</p>
                <form>
                    <input type="text" />
                </form>
            </div>
        )
    }
}
