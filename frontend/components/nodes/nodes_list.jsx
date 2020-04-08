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
        return(
            <div className="NodeListDiv">
                <h3>This is the Title</h3>
                <ul className="NodeListUl">
                    {
                    this.props.nodes.map(node => (
                        <NodeListItem
                            key={node.id}
                            node={node}
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
