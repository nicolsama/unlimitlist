import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NodeListItem from './node_list_item';

class NodeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allNodes: this.props.allNodes, 
            parentNodeIds: this.props.parentNodeIds,
        }
    }

    componentDidMount() {
        this.props.fetchAllNodes();
    }

    render() {
        debugger;
        if (!this.props.parentNodeIds) return null; 

        debugger; 
            const nodeLis = this.props.parentNodeIds.map(id => {
                debugger
                let node = this.props.allNodes[id];
                debugger;
                return (<NodeListItem
                    key={node.id}
                    node={node}
                    allNodes={this.props.allNodes}
                    fetchNode={this.props.fetchNode}
                    updateNode={this.props.updateNode}
                    createNode={this.props.createNode}
                />)
            })

        return (
            <div className="NodeListDiv">
                <ul className="NodeListUl">
                    {nodeLis}
                    <input 
                        type='submit' 
                        value='+' 
                        id="addNode"
                    />
                </ul>
            </div>
        )
    }

}

export default NodeList; 
