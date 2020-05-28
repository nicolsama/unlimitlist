import React from 'react';
import NodeListItem from './node_list_item';
import { withRouter } from 'react-router-dom';


class NodeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    allNodes: this.props.allNodes, 
                    parentNodeIds: this.props.parentNodeIds,
                    currentNodeBody: "", 
                    bodyUpdated: false
                }

        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.updateStateBody = this.updateStateBody.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
            this.props.fetchAllNodes();
    }
    
    handleClick(e) {

            let body = (this.props.currentNodeId) ? e.currentTarget.value : "";
            let parent_node_id = (this.props.currentNodeId) ? this.props.currentNodeId : null; 

            const newNode = {
                id: null,
                body: body,
                completed: false,
                ord: null,
                parent_node_id: parent_node_id,
                ord_bookmark: this.props.allNodes[this.props.lastCreated].ord,
            }
            
            this.props.createNode(newNode);
    }

    updateNode() {
        let newNode = this.state.allNodes[this.props.currentNodeId]; 
        newNode.body = this.state.currentNodeBody; 
        this.props.updateNode(newNode);
    }

    updateStateBody() {
        // this.setState({currentNodeBody: this.props.allNodes[this.props.currentNodeId].body, bodyUpdated: true})
    }

    handleBlur(e) {
        this.setState({ currentNodeBody: e.currentTarget.textContent }, this.updateNode)
    }

    handleKeyDown(e) {
        
        if (e.key === 'Enter' && this.props.allNodes[this.props.currentNodeId] ) {
            e.preventDefault();
            this.setState({ currentNodeBody: this.props.allNodes[this.props.currentNodeId].body}, this.updateNode)
        }
    }

    render() {
        
        
        if (!this.props.parentNodeIds) return null; 
            
            const parentNodeIds = (this.props.search) ? this.props.filteredParentNodeIds : this.props.parentNodeIds ;
            const nodeLis = parentNodeIds.map(id => {

                let node = this.props.allNodes[id];
    
                return (<NodeListItem
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
                />)
            })

        
        if (this.props.allNodes[this.props.currentNodeId] && !this.state.bodyUpdated) {  
            this.updateStateBody(); 
        }

        return (<>

            <div className="NodeListDiv">
                <ul className="NodeListUl">
                { (this.props.allNodes[this.props.currentNodeId]) 
                        ? (<h2 className="focusTitle"
                            contentEditable="true"
                            onBlur={this.handleBlur}
                            onKeyDown={this.handleKeyDown}>
                            {this.state.currentNodeBody}
                        </h2>)
                        : null }

                    {nodeLis}
                </ul>
                <button
                    id="addNode"
                    onClick={this.handleClick}>
                +
                </button>
            </div>
        </>
        )
    }

}

export default withRouter(NodeList); 
