import { connect } from 'react-redux';
import NodeList from './nodes_list'; 
import { fetchAllNodes, fetchNode, createNode, updateNode, deleteNode } from '../../actions/node_actions';



const mapStateToProps = (state, ownProps) => { 
    debugger;
    let topNode = (ownProps.match.params.id) ? ownProps.match.params.id : null;
    debugger;
    return ({
        topNode: topNode,
        allNodes: state.entities.nodes.allNodes,
        parentNodeIds: state.entities.nodes.parentNodeIds,
        lastCreated: state.entities.nodes.lastCreated,
    })
}; 

const mapDispatchToProps = (dispatch) => ({
    fetchAllNodes: () => dispatch(fetchAllNodes()), 
    fetchNode: nodeId => dispatch(fetchNode(nodeId)), 
    createNode: node => dispatch(createNode(node)), 
    updateNode: node => dispatch(updateNode(node)), 
    deleteNode: nodeId => dispatch(deleteNode(nodeId)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(NodeList);
