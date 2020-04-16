import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class SidebarItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show_children: false, 
        }
        this.showChildren = this.showChildren.bind(this)
    }

    showChildren() {
        const show_children = this.state.show_children;
        this.setState({ show_children: !show_children });
    }

    render()    {
        // debugger; 
        if (!this.props.node) return null; 

        const nestedNodes = this.props.node.child_ids.map(id => {
            let node = this.props.allNodes[id];
            return (<SidebarItem
                node={node}
                allNodes={this.props.allNodes}
            />)
        })

        return (
        <div className="sidebarItem">
    
                <li className="SidebarItem">
                    <a href='#' onClick={this.showChildren}>
                        <svg transform={this.state.show_children && this.props.node.child_ids.length ? "rotate(90)" : ""}>
                            {(this.props.node.child_ids.length) ?
                                <path d="M13.75 9.56879C14.0833 9.76124 14.0833 10.2424 13.75 10.4348L8.5 13.4659C8.16667 13.6584 7.75 13.4178 7.75 13.0329L7.75 6.97072C7.75 6.58582 8.16667 6.34525 8.5 6.5377L13.75 9.56879Z"
                                /> : null}
                        </svg>
                    </a>
                    <Link to={`/nodes/${this.props.node.id}`}>
                    <span>  
                        {this.props.node.body}
                    </span>
                    </Link>
                </li>
            
            <ul className='sidebarSublist' >
                {this.state.show_children
                    ? nestedNodes
                    : null
                }
            </ul>
        </div>)
    }
}

export default SidebarItem;