import React from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Tooltip from "../navs/tooltip";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Text from "./text.jsx";

class NodeListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      node: this.props.node,
      showChildren: this.props.search,
      show_tooltip: false,
      fillColor: false,
      searchToggled: false,
      showCompleted: this.props.showCompleted

    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.showChildren = this.showChildren.bind(this);
    this.textInput = React.createRef();
    this.lastCreated = React.createRef();
    this.handleBlur = this.handleBlur.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.changeFillColor = this.changeFillColor.bind(this);
  }

  componentDidMount() {
    if (!this.props.search) this.textInput.current.focus();
  }

  handleBlur(e) {
    this.setState(
      {
        node: {
          body: e.currentTarget.textContent,
          child_ids: this.props.node.child_ids,
          completed: this.props.node.completed,
          id: this.props.node.id,
          ord: this.props.node.ord,
          parent_node_id: this.props.node.parent_node_id,
          search: this.props.search,
        },
      },
      () => this.props.updateNode(this.state.node)
    );
  }

  handleKeyPress(e) {
    if (this.props.node.id && e.key === "Enter") {
      e.preventDefault();
      if (this.props.search) this.props.history.push("/");
      this.setState(
        {
          node: {
            body: e.currentTarget.textContent,
            child_ids: this.props.node.child_ids,
            completed: this.props.node.completed,
            id: this.props.node.id,
            ord: this.props.node.ord,
            parent_node_id: this.props.node.parent_node_id,
          },
        },
        () => this.props.updateNode(this.state.node)
      );

      let ord_bookmark = this.props.node.ord ? this.props.node.ord : null;
      const newNode = {
        id: null,
        body: "",
        completed: false,
        ord: null,
        parent_node_id: this.props.node.parent_node_id,
        ord_bookmark: ord_bookmark,
      };
      this.props.createNode(newNode);
    } else if (
      (e.keyCode === 8 || e.key === "Backspace") &&
      e.currentTarget.innerHTML.length === 0
    ) {
      this.props.deleteNode(this.props.node.id);
    }
  }

  showChildren() {
    this.setState({ showChildren: !this.state.showChildren })
      .then(this.props.history.push(`nodes/${this.props.currentNodeId}`))
  }

  showTooltip(e) {
    if (e.type === "mouseleave" && this.state.show_tooltip) {
      this.setState({ show_tooltip: !this.state.show_tooltip });
    }

    if (e.type == "click" && !this.state.show_tooltip) {
      this.setState({ show_tooltip: !this.state.show_tooltip });
    }
  }

  changeFillColor() {
    this.setState({ fillColor: !this.state.fillColor });
  }

  render() {
    const allNodes = this.props.allNodes;
    let filteredIds;
    if (this.props.search) {
      filteredIds = Object.values(this.props.filteredNodes).map(
        (node) => node.id
      );
    }

    let childNodeIds = this.props.search
      ? this.props.node.child_ids.filter((id) => filteredIds.includes(id))
      : this.props.node.child_ids;

    childNodeIds = childNodeIds.sort(
      (a, b) => allNodes[a].ord - allNodes[b].ord
    );

    const nestedNodes = childNodeIds.map((id) => {
      const node = allNodes[id];

      return ((this.state.showCompleted) || (!this.state.showCompleted && node.completed === false))
      
      ? ( <NodeListItem

          key={id}
          node={node}
          allNodes={allNodes}
          filteredNodes={this.props.filteredNodes}
          fetchNode={this.props.fetchNode}
          updateNode={this.props.updateNode}
          createNode={this.props.createNode}
          deleteNode={this.props.deleteNode}
          lastCreated={this.props.lastCreated}
          currentNodeId={this.props.currentNodeId}
          search={this.props.search}
          type="child"
        /> )
        : null; 
    });

    const tooltip = this.state.show_tooltip ? (
      <div>
        <div className="tooltip-arrow" />
        <div className="tooltip-label">
          <Tooltip
            className="tooltipDiv"
            showing={this.state.show_tooltip}
            node={this.props.node}
            updateNode={this.props.updateNode}
            createNode={this.props.createNode}
            deleteNode={this.props.deleteNode}
          />
        </div>
      </div>
    ) : null;

    const fillColor = this.state.fillColor ? "grey" : "none";
    let showLink = this.props.currentNodeId
      ? `#/nodes/${this.props.currentNodeId}`
      : "#";

    return (
      <>
        <li
          className="NodeListItem"
          onMouseOver={this.changeFillColor}
          onMouseOut={this.changeFillColor}
          className={`completed-${this.props.node.completed}`}
        >
          <div className="svgContainer">
            <div onMouseLeave={(e) => this.showTooltip(e)}>
              <a href={showLink} onClick={(e) => this.showTooltip(e)}>
                <svg viewBox="0 0 24 24" className="tooltipCircles">
                  <circle
                    cx="6"
                    cy="12"
                    r="2"
                    className="ttcircle"
                    fill={fillColor}
                  ></circle>
                  <circle
                    cx="12"
                    cy="12"
                    r="2"
                    className="ttcircle"
                    fill={fillColor}
                  ></circle>
                  <circle
                    cx="18"
                    cy="12"
                    r="2"
                    className="ttcircle"
                    fill={fillColor}
                  ></circle>
                </svg>
              </a>

              <ReactCSSTransitionGroup
                transitionName="settings"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={800}
              >
                {tooltip}
              </ReactCSSTransitionGroup>
            </div>
            <a href={showLink} onClick={this.showChildren}>
              <svg
                transform={
                  this.state.showChildren && this.props.search
                    ? "rotate(45)"
                    : this.state.showChildren
                    ? "rotate(90)"
                    : ""
                }
              >
                {this.props.node.child_ids.length ? (
                  <path d="M13.75 9.56879C14.0833 9.76124 14.0833 10.2424 13.75 10.4348L8.5 13.4659C8.16667 13.6584 7.75 13.4178 7.75 13.0329L7.75 6.97072C7.75 6.58582 8.16667 6.34525 8.5 6.5377L13.75 9.56879Z" />
                ) : null}
              </svg>
            </a>

            <Link to={`/nodes/${this.props.node.id}`}>
              <div>
                <svg className="bullet">
                  <circle cx="9" cy="9" r="3.5" />
                </svg>
              </div>
            </Link>

            <Text
              query={this.props.search}
              onKeyDown={this.handleKeyPress}
              onBlur={this.handleBlur}
            >
              <span ref={this.textInput}>{this.props.node.body}</span>
            </Text>
          </div>
          <ul className="sublist">
            {this.props.search || this.state.showChildren ? nestedNodes : null}
          </ul>
        </li>
      </>
    );
  }
}

export default withRouter(NodeListItem);
