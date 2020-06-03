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
      let search = { tag: this.props.search };
      this.props.fetchAllNodes(search);
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
      this.props.updateNode(newNode)
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


    if (!this.props.loggedIn) { 
      return null 
    } else {

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

    let createStar;

    if (this.props.allNodes[this.props.currentNodeId]) {
      let fill = (this.props.allNodes[this.props.currentNodeId].starred) ? "yellow" : "none" ;
      createStar = (<div className='starBar'>
        <div 
          className="starButton"
          // onClick={}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill={fill}>
              <path
                stroke="grey"
                fill={fill} 
                d="M9.278,3.513 C9.568,2.906 10.432,2.906 10.722,3.513 L12.261,6.739 C12.378,6.983 12.61,7.152 12.879,7.187 L16.422,7.654 C17.089,7.742 17.356,8.564 16.868,9.028 L14.276,11.488 C14.08,11.675 13.991,11.948 14.04,12.214 L14.691,15.728 C14.813,16.39 14.114,16.898 13.523,16.577 L10.382,14.872 C10.144,14.743 9.856,14.743 9.618,14.872 L6.477,16.577 C5.886,16.898 5.187,16.39 5.309,15.728 L5.96,12.214 C6.009,11.948 5.92,11.675 5.724,11.488 L3.132,9.028 C2.644,8.564 2.911,7.742 3.578,7.654 L7.121,7.187 C7.39,7.152 7.622,6.983 7.739,6.739 L9.278,3.513 Z">

              </path>
            </svg>
        </div>
      </div>)
    }

      return (
        <>
            {createStar}
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
}

export default withRouter(NodeList);
