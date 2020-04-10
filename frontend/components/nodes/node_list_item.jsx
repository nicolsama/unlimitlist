import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NodeListContainer from './nodes_list_container';


class NodeListItem extends React.Component {
    constructor(props) {
        super(props);
        debugger; 
        // this.state = this.props.node;
        const { id, body, completed, ord, child_ids, parent_node_id } = this.props.node; 
        this.state = {
            node: {            
                id: id,
                body: body,
                completed: completed,
                ord: ord,
                child_ids: child_ids,
                parent_node_id: parent_node_id
            }, 
            allNodes: this.props.allNodes,
        }

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.updateNode = this.updateNode.bind(this);
    }

    updateNode() {
        this.props.updateNode(this.state.node)
    }


    handleKeyPress(e) {
        debugger;
        if ((this.state.node.id) && e.key === 'Enter') {
            debugger;
            this.setState({ node: {body: e.currentTarget.textContent} }, this.updateNode);

            debugger;
            const newNode = {
                id: null,
                body: " ",
                completed: false,
                ord: null,
                parent_node_id: this.state.node.parent_node_id,
            }

            this.props.createNode(newNode);
        }
    }

    // handleEnter(e) => {
    //     // Custom set cursor on zero text position in input text field
    //     event.target.selectionStart = 0
    //     event.target.selectionEnd = 0

    //     this.setState({ value: event.target.value })
    // }

    render() {
        debugger; 
        const allNodes = this.props.allNodes;

        const nestedNodes = (this.props.node.child_ids).map( id => { 
            const node = allNodes[id];
            debugger; 
            return (<NodeListItem
                key={id}
                node={node}
                allNodes={this.props.allNodes}
                fetchNode={this.props.fetchNode}
                updateNode={this.props.updateNode}
                createNode={this.props.createNode}
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
                    onKeyPress={(e) => this.handleKeyPress(e)}
                    className="existingNode">
                    {this.state.node.body}
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