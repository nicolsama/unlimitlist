import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NodeListItem from './node_list_item';
import SideBar from '../sidebar';

class NodeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allNodes: this.props.allNodes, 
            parentNodeIds: this.props.parentNodeIds, 
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // debugger; 
        if (Boolean(this.props.currentNodeId)) {
            // debugger;
            // this.props.fetchNode(this.props.currentNodeId);
 
        } else {
            // debugger; 
            this.props.fetchAllNodes();
            // this.props.fetchNode(this.props.currentNodeId);
        }
    }

    handleClick() {
        const newNode = {
            id: null,
            body: "",
            completed: false,
            ord: null,
            parent_node_id: null,
        }

        this.props.createNode(newNode);
    }

    render() {
        // debugger;
        if (!this.props.parentNodeIds) return null; 

        // debugger; 
            const nodeLis = this.props.parentNodeIds.map(id => {
                // debugger
                let node = this.props.allNodes[id];
                // debugger;
                return (<NodeListItem
                    key={node.id}
                    node={node}
                    allNodes={this.props.allNodes}
                    fetchNode={this.props.fetchNode}
                    updateNode={this.props.updateNode}
                    createNode={this.props.createNode}
                    deleteNode={this.props.deleteNode}
                    lastCreated={this.props.lastCreated}
                />)
            })

        
            // debugger; 
        return (<>
            <SideBar />
            <div className="NodeListDiv">
                <ul className="NodeListUl">
                <h2 className="focusTitle"> {this.props.allNodes[this.props.currentNodeId] ? this.props.allNodes[this.props.currentNodeId].body : ""} </h2>
                    {nodeLis}
                    <input 
                        type='submit' 
                        value='+' 
                        id="addNode"
                        onClick={this.handleClick}
                    />
                </ul>
            </div>
        </>
        )
    }

}

export default NodeList; 
