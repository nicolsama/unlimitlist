import { connect } from "react-redux";
import NodeListFocus from "./node_list_focus";
import {
  fetchAllNodes,
  fetchNode,
  createNode,
  updateNode,
  deleteNode,
} from "../../actions/node_actions";

const mapStateToProps = (state, ownProps) => {
  let currentNodeId = Number(ownProps.match.params.id);

  return {
    loggedIn: !!state.session.id,
    allNodes: state.entities.nodes.allNodes,
    parentNodeIds: state.entities.nodes.parentNodeIds,
    lastCreated: state.entities.nodes.lastCreated,
    currentNodeId,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllNodes: () => dispatch(fetchAllNodes()),
  fetchNode: (nodeId) => dispatch(fetchNode(nodeId)),
  createNode: (node) => dispatch(createNode(node)),
  updateNode: (node) => dispatch(updateNode(node)),
  deleteNode: (nodeId) => dispatch(deleteNode(nodeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NodeListFocus);
