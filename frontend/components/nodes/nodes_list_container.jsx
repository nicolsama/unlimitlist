import { connect } from "react-redux";
import NodeList from "./node_list";
import {
  fetchAllNodes,
  fetchNode,
  createNode,
  updateNode,
  deleteNode,
} from "../../actions/node_actions";

const mapStateToProps = (state, ownProps) => {
  let currentNodeId = parseInt(ownProps.match.params.id);
  
  debugger; 

  return {
    loggedIn: !!state.session.id,
    allNodes: state.entities.nodes.allNodes,
    parentNodeIds: state.entities.nodes.parentNodeIds,
    filteredNodes: state.entities.nodes.filteredNodes,
    filteredParentNodeIds: state.entities.nodes.filteredParentNodeIds,
    lastCreated: state.entities.nodes.lastCreated,
    currentNodeId,
    search: state.entities.nodes.search,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllNodes: () => dispatch(fetchAllNodes()),
  fetchNode: (nodeId) => dispatch(fetchNode(nodeId)),
  createNode: (node) => dispatch(createNode(node)),
  updateNode: (node) => dispatch(updateNode(node)),
  deleteNode: (nodeId) => dispatch(deleteNode(nodeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NodeList);
