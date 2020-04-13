import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NodeListContainer from './nodes_list_container';
import NodeList from './nodes_list';


class NodeListFocus extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     currentNodeId: this.props.currentNodeId, 
        //     allNodes: this.props.currentNode,
        // }
    }

    componentDidMount() {
        // this.props.fetchAllNodes();
        // debugger; 
        // this.props.fetchNode(this.props.currentNodeId);
    }

    render() {
        debugger; 
        if (!this.props.allNodes) return null; 
        debugger
        return(<div>
            {/* <h3>this is the focus page</h3> */}
            <NodeList {...this.props} parentNodeIds={this.props.allNodes[this.props.currentNodeId].child_ids} />
        </div>)
    }

}



export default NodeListFocus;