import React from "react";
import NodeListItem from "./node_list_item";
import { withRouter } from "react-router-dom";

class NodeList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    if (!this.props.search) {
      this.props.fetchAllNodes();
    } else {
      this.props.fetchAllNodes(this.props.search);
    }
  }

  handleClick(e) {
    let body = this.props.currentNodeId ? e.currentTarget.value : "";
    let parent_node_id = this.props.currentNodeId
      ? this.props.currentNodeId
      : null;
    let ord_bookmark = this.props.allNodes
      ? this.props.allNodes[this.props.lastCreated].ord
      : 1;

    const newNode = {
      id: null,
      body: body,
      completed: false,
      ord: null,
      parent_node_id: parent_node_id,
      ord_bookmark: ord_bookmark,
    };

    this.props.createNode(newNode);
  }

  updateNode(e) {
    let newNode = this.props.allNodes[this.props.currentNodeId];
    newNode.body = e.currentTarget.innerText;
    this.props.updateNode(newNode);
  }

  handleBlur(e) {
    this.updateNode(e);
  }

  handleKeyDown(e) {
    if (e.key === "Enter" && this.props.allNodes[this.props.currentNodeId]) {
      e.preventDefault();
      this.updateNode(e);
    }
  }

  render() {
    if (!this.props.loggedIn) return null; 

    if (!this.props.parentNodeIds) {
      return (
        <>
          <div className="NodeListDiv">
            <button id="addNode" onClick={this.handleClick}>
              +
            </button>
          </div>
        </>
      );
    }

    const parentNodeIds = this.props.search
      ? this.props.filteredParentNodeIds
      : this.props.parentNodeIds;
    const nodeLis = parentNodeIds.map((id) => {
      let node = this.props.allNodes[id];

      return (
        <NodeListItem
          key={node.id}
          node={node}
          allNodes={this.props.allNodes}
          filteredNodes={this.props.filteredNodes}
          fetchNode={this.props.fetchNode}
          updateNode={this.props.updateNode}
          createNode={this.props.createNode}
          deleteNode={this.props.deleteNode}
          lastCreated={this.props.lastCreated}
          fetchAllNodes={this.props.fetchAllNodes}
          currentNodeId={this.props.currentNodeId}
          search={this.props.search}
        />
      );
    });

    return (
      <>
        <div className="NodeListDiv">
          <ul className="NodeListUl">
            {this.props.allNodes[this.props.currentNodeId] ? (
              <h2
                className="focusTitle"
                contentEditable="true"
                onBlur={this.handleBlur}
                onKeyDown={this.handleKeyDown}
              >
                {this.props.allNodes[this.props.currentNodeId].body}
              </h2>
            ) : null}

            {nodeLis}
          </ul>
          <button id="addNode" onClick={this.handleClick}>
            +
          </button>
        </div>
      </>
    );
  }
}

export default withRouter(NodeList);
