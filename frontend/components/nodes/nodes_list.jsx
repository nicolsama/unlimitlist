import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NodeListItem from './node_list_item';

class NodeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "", 
            ord: null, 
            completed: false,
        }

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllNodes();
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' && (this.state.id === undefined)) {
            // debugger; 
            this.props.createNode(this.state);
            let oldOrd = this.state.ord; 
            this.setState({body: "", ord: oldOrd + 1, completed: false})
        }
    }


    render() {
        if (!this.props.nodes) return null; 
        let rootNodes = this.props.nodes.filter(node => node.parent_node_id === null);
        return(
            <div className="NodeListDiv">
                <ul className="NodeListUl">
                    {
                    rootNodes.map(node => (
                        <NodeListItem
                            key={node.id}
                            node={node}
                            nodes={this.props.nodes}
                            childNodes={node.child_node_ids}
                            fetchNode={this.props.fetchNode}
                            updateNode={this.props.updateNode}
                        />))
                    }
                    <li>
                        <input type="text"
                        className='newNodeInput'
                        value={this.state.body}
                        onChange={this.update('body')}
                        onKeyPress={(e) => this.handleKeyPress(e)}/>
                    </li>
                </ul>
            </div>
        )
    }

}

export default NodeList; 
