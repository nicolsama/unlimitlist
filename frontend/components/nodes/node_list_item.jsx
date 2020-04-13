import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NodeListContainer from './nodes_list_container';


class NodeListItem extends React.Component {
    constructor(props) {
        super(props);
        const { id, body, completed, ord, child_ids, parent_node_id } = this.props.node; 
        this.state = this.props.node; 
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.updateNode = this.updateNode.bind(this);
        this.showChildren = this.showChildren.bind(this);
        this.textInput = React.createRef();
        this.handleBlur = this.handleBlur.bind(this);
        // this.handleFocus = this.handleFocus.bind(this);
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    updateNode() {
        // debugger;
        this.props.updateNode(this.state)
    }

    
    handleBlur(e) {
        this.setState({ body: e.currentTarget.textContent }, this.updateNode);
    }

    // handleFocus(e) {
    // }

    handleKeyDown(e) {
    
        // debugger;
        if ((this.state.id) && e.key === 'Enter') {
            e.preventDefault();
            this.setState({ body: e.currentTarget.textContent }, this.updateNode);

            // debugger;
            const newNode = {
                id: null,
                body: "",
                completed: false,
                ord: null,
                parent_node_id: this.state.parent_node_id,
            }

            this.props.createNode(newNode);
        } else if (e.keyCode === 8 && (e.currentTarget.innerHTML.length === 0)) {
      
            // debugger; 
            this.props.deleteNode(this.state.id);
        }
    }

    showChildren() {
        const show_children = this.state.show_children; 
        this.setState({ show_children: !show_children });
    }

    render() {
        // debugger; 
        const allNodes = this.props.allNodes;
        // debugger; 
        const nestedNodes = (this.props.node.child_ids).map( id => { 
            const node = allNodes[id];
            // debugger; 
            return (<NodeListItem
                key={id}
                node={node}
                allNodes={this.props.allNodes}
                fetchNode={this.props.fetchNode}
                updateNode={this.props.updateNode}
                createNode={this.props.createNode}
                deleteNode={this.props.deleteNode}
                lastCreated={this.props.lastCreated}
                type="child" />)
            
        });


        return (
            <>
            <li className="NodeListItem">
                <div className="svgContainer">

                        <a href='#' onClick={this.showChildren}>
                            <svg transform={this.state.show_children && this.state.child_ids.length ? "rotate(90)" : ""}>
                            { (this.state.child_ids.length) ? 
                            <path d="M13.75 9.56879C14.0833 9.76124 14.0833 10.2424 13.75 10.4348L8.5 13.4659C8.16667 13.6584 7.75 13.4178 7.75 13.0329L7.75 6.97072C7.75 6.58582 8.16667 6.34525 8.5 6.5377L13.75 9.56879Z"
                            /> : null }
                            </svg>
                        </a>

                        <Link to={`/nodes/${this.state.id}`}>
                            <div>
                                <svg className="bullet">
                                    <circle cx="9" cy="9" r="3.5" />
                                </svg>
                            </div>
                        </Link>

                        <div
                            class='editable'
                            contentEditable="true"
                            onKeyDown={(e) => this.handleKeyDown(e)}
                            // onFocus={this.handleFocus}
                            ref={this.textInput}
                            onBlur={this.handleBlur}
                            >
        
                                {this.state.body}
                    
                        </div>
                    </div>
                <ul className='sublist' >
                    { this.state.show_children
                        ? nestedNodes
                        : null
                    }
                </ul>
            </li>
            </>
        );
    }

}

export default NodeListItem;