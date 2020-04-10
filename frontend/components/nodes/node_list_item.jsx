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
                <a href='#'>
                        <svg height="20" width="16" transform='rotate(-90)'>
                            <polygon points="0,0 3.5,7 7,0" fill="gray" />
                    </svg>
                </a>
                <a href='#'>
                    <svg height="8" width="16">
                        <circle cx="3" cy="3" r="3" fill="gray" />
                        <circle cx="3" cy="3" r="3" fill="gray" />
                    </svg>
                </a>

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