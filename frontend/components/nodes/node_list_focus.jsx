import React from "react";
import NodeList from "./node_list";

class NodeListFocus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.allNodes) return null;
    return (
      <div>
        <NodeList
          {...this.props}
          parentNodeIds={
            this.props.allNodes[this.props.currentNodeId].child_ids
          }
        />
      </div>
    );
  }
}

export default NodeListFocus;
