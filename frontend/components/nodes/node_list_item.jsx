import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NodeListContainer from './nodes_list_container';
import { withRouter } from 'react-router-dom';
import Tooltip from '../navs/tooltip'; 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Text from './text.jsx'

class NodeListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, 
            this.props.node, 
            {   
                showChildren: this.props.search,
                show_tooltip: false, 
                fillColor: false,
                searchToggled: false
            })
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.updateNode = this.updateNode.bind(this);
        this.showChildren = this.showChildren.bind(this);
        this.textInput = React.createRef();
        this.lastCreated = React.createRef();
        this.handleBlur = this.handleBlur.bind(this);
        this.showTooltip = this.showTooltip.bind(this);
        this.changeFillColor = this.changeFillColor.bind(this);
    }

    // componentDidMount() {
    //     this.textInput.current.focus();
    // }

    updateNode() {
        this.props.updateNode(this.state)
    }
    
    handleBlur(e) {
        this.setState({ body: e.currentTarget.textContent }, this.updateNode)
    }

    handleKeyDown(e) {

        if ((this.state.id) && e.key === 'Enter') {
            e.preventDefault();
            this.setState({ body: e.currentTarget.textContent }, this.updateNode);
    
            let ord_bookmark = (this.props.node.ord) ? (this.props.node.ord) : null;
            const newNode = {
                id: null,
                body: "",
                completed: false,
                ord: null,
                parent_node_id: this.props.node.parent_node_id,
                ord_bookmark: ord_bookmark,
            }

            this.props.createNode(newNode);
        } else if (e.keyCode === 8 && (e.currentTarget.innerHTML.length === 0)) {
 
            this.props.deleteNode(this.state.id);
        }
    }

    showChildren() {
        this.setState({ showChildren: !this.state.showChildren })
            .then(() => this.props.history.push(`nodes/${this.props.currentNodeId}`));
    }

    showTooltip() {
        const show_tooltip = this.state.show_tooltip;
        this.setState({ show_tooltip: !show_tooltip });
    }

    changeFillColor() {
        this.setState({ fillColor: !this.state.fillColor });
    }

    render() {     
   
        const allNodes = this.props.allNodes;  

        let filteredIds; 
        if (this.props.search) {
         
            filteredIds = Object.values(this.props.filteredNodes).map( node => (node.id) );
        }

    
        let childNodeIds = (this.props.search) 
            ? this.props.node.child_ids.filter( id => filteredIds.includes(id))
            : this.props.node.child_ids;

    
        childNodeIds = childNodeIds.sort((a,b) => (allNodes[a].ord - allNodes[b].ord));

        const nestedNodes = childNodeIds.map( id => { 
            const node = allNodes[id];
 
            return (<NodeListItem
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
                type="child" />)
        });

        const tooltip = this.state.show_tooltip ? (<div>
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
        </div>) : null ;

        const fillColor = (this.state.fillColor) ? "grey" : "none";
        let showLink = (this.props.currentNodeId) ? `#/nodes/${this.props.currentNodeId}` : "#";

        debugger;
        return (
            <>
            <li className="NodeListItem"
                onMouseOver={this.changeFillColor}
                onMouseOut={this.changeFillColor}
                className={`completed-${this.props.node.completed}`}>
                <div className="svgContainer">

                        <a href={showLink} onClick={this.showTooltip}>
                            <svg viewBox="0 0 24 24" className="tooltipCircles">
                                <circle cx="6" cy="12" r="2" className="ttcircle" fill={fillColor}></circle>
                                <circle cx="12" cy="12" r="2" className="ttcircle" fill={fillColor}></circle>
                                <circle cx="18" cy="12" r="2" className="ttcircle" fill={fillColor}></circle>
                            </svg>
                        </a>

                        <ReactCSSTransitionGroup
                            transitionName="settings"
                            transitionEnterTimeout={800}
                            transitionLeaveTimeout={800}>
                                    {tooltip}
                        </ReactCSSTransitionGroup>
                        
                        <a href={showLink} onClick={this.showChildren}>
                            <svg transform={this.state.showChildren || this.props.search ? "rotate(90)" : ""}>
                            { (this.state.child_ids.length) ? 
                            <path d="M13.75 9.56879C14.0833 9.76124 14.0833 10.2424 13.75 10.4348L8.5 13.4659C8.16667 13.6584 7.75 13.4178 7.75 13.0329L7.75 6.97072C7.75 6.58582 8.16667 6.34525 8.5 6.5377L13.75 9.56879Z"
                            /> : null }
                            </svg>
                        </a>

                        <Link to={`/nodes/${this.state.id}`}>
                            <div>
                                <svg className="bullet">
                                    <circle cx="9" cy="9" r="3.5" />
                                </svg>
                            </div>
                        </Link>

                        {/* <div
                            className='editable'
                            contentEditable="true"
                            onKeyDown={(e) => this.handleKeyDown(e)}                            
                            ref={this.textInput}
                            onBlur={this.handleBlur}
                            >
                            {this.state.body}
                    
                        </div> */}

                        <Text 
                            handleKeyDown={this.handleKeyDown}
                            // ref={this.textInput}
                            handleBlur={this.handleBlur}
                            body={this.state.body} 
                            query={this.props.search}/>
                    </div>
                <ul className='sublist' >
                    { this.props.search || this.state.showChildren
                        ? nestedNodes
                        : null }
                </ul>
            </li>
            </>
        );
    }

}

export default withRouter(NodeListItem);