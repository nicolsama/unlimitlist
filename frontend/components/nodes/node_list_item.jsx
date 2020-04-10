import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NodeListContainer from './nodes_list_container';

class NodeListItem extends React.Component {
    constructor(props) {
        super(props);
        debugger; 
        this.state = this.props.node;
        // this.state = {
        //     id: this.props.node.id,
        //     body: this.props.node.body,
        //     completed: this.props.node.completed,
        //     ord: this.props.node.ord,
        // }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        debugger; 
        if ((this.state.id) && e.key === 'Enter') {
            this.props.updateNode(this.state);
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        debugger; 
        const allNodes = this.props.nodes;

        const nestedNodes = (this.props.node.child_ids).map( id => { 
            const node = allNodes[id];
            debugger; 
            return (<NodeListItem
                key={id}
                node={node}
                nodes={this.props.nodes}
                fetchNode={this.props.fetchNode}
                updateNode={this.props.updateNode}
                type="child" />)
            
        });

        return (
            <>
            <div className="NodeListItem">
                <div className="svgContainer">
                        <a href='#'>
                            <svg >
                                <path d="M13.75 9.56879C14.0833 9.76124 14.0833 10.2424 13.75 10.4348L8.5 13.4659C8.16667 13.6584 7.75 13.4178 7.75 13.0329L7.75 6.97072C7.75 6.58582 8.16667 6.34525 8.5 6.5377L13.75 9.56879Z"
                                />
                            </svg>
                        
                        </a>
                        <a href='#'>
                            <svg  transform='rotate(-90)'>
                                <circle cx="9" cy="9" r="3.5" />
                            </svg>
                        </a>
                    </div>
                <span
                    class='editable' 
                    contentEditable="true"
                    onChange={this.update('body')}
                    onKeyPress={(e) => this.handleKeyPress(e)}
                    className="existingNode">
                    {this.state.body}
                </span>
            </div>
                <div className='sublist'>
                    {nestedNodes}
                </div>
            </>
        );
    }

}

export default NodeListItem;