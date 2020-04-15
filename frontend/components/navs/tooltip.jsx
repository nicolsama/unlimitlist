import React from 'react';

class Tooltip extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(<div>
            <div className="tt-wrapper">
                <ul className="tt-list">
                    <li className="tt-list-item">Complete</li>
                    <li className="tt-list-item">Add Note</li>
                    <li className="tt-list-item">Duplicate</li>
                </ul>
                <ul className="tt-list">
                    <li className="tt-list-item">Share</li>
                    <li className="tt-list-item">Export</li>
                    <li className="tt-list-item">Copy Link</li>
                </ul>
                <ul className="tt-list">
                    <li className="tt-list-item">Expand All</li>
                    <li className="tt-list-item">Collapse All</li>

                </ul>
                <ul className="tt-list">
                    <li className="tt-list-item" onClick={this.props.logout}>Delete</li>
                </ul>
                <ul>
                    <span className='userEmail'>Last changed at {}</span>
                </ul>
            </div>
        </div>)
    }
}

export default Tooltip; 