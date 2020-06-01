import React from 'react';

class Tooltip extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.node; 

        this.handleComplete = this.handleComplete.bind(this);
        this.handleDuplicate = this.handleDuplicate .bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    handleDuplicate() {
        if (this.props.showing) {
        let newNode = {
            id: null,
            body: this.state.body,
            completed: this.state.completed,
            ord: null,
            parent_node_id: this.state.parent_node_id,
        }
        this.props.createNode(newNode);}
    }

    handleComplete() {
        this.setState({ completed: true });
        const updatedNode = {
            id: this.state.id,
            body: this.state.body,
            completed: !this.state.completed,
            ord: this.state.ord,
            parent_node_id: this.stateparent_node_id
        }
        this.props.updateNode(updatedNode);
    }

    handleDelete() {
        this.props.deleteNode(this.state.id);
    }

    render() {

        return(<div>
            <div className="tt-wrapper">
                <ul className="tt-list">
                    <li className="tt-list-item">
                        <a onClick={this.handleComplete}>
                            {this.props.node.completed ? "Uncomplete" : "Complete"}
                        </a>
                    </li>

                    <li className="tt-list-item">Add Note</li>

                    <li className="tt-list-item">
                        <a onClick={this.handleDuplicate}>
                            Duplicate
                        </a>
                    </li>

                </ul>

                <ul className="tt-list">
                    
                    <li className="tt-list-item">Expand All</li>
                    
                    <li className="tt-list-item">Collapse All</li>

                </ul>
                <ul className="tt-list">
                    
                    <li className="tt-list-item">
                        <a onClick={this.handleDelete}>
                            Delete
                        </a></li>
                </ul>
                
                <ul>
                    <span className='userEmail'>Last changed at {}</span>
                </ul>
            </div>
        </div>)
    }
}

export default Tooltip; 