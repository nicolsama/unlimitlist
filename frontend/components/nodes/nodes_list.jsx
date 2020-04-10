import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NodeListItem from './node_list_item';

class NodeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "", 
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
        if ((!this.state.id) && e.key === 'Enter') {
            debugger; 
            this.props.createNode(this.state);
            this.setState({body: "", completed: false});
        }
    }

    render() {
        debugger;

        if (!Object.values(this.props.nodes).length) return null; 

        debugger;

        return (
            <div className="NodeListDiv">
                <ul className="NodeListUl">
                    {Object.values(this.props.nodes).map(node => (
                        <NodeListItem
                            key={node.id}
                            node={node}
                            nodes={this.props.nodes}
                            fetchNode={this.props.fetchNode}
                            updateNode={this.props.updateNode}
                        />))
                    }
                    <input 
                        type='submit' 
                        value='+' 
                        id="addNode"
                    />

                    <li className='newNodeLi'>
                        <span
                        class='editable'
                        contentEditable="true"
                        onChange={this.update('body')}
                        onKeyPress={(e) => this.handleKeyPress(e)}>
                        {this.state.body}
                        </span>
                    </li>
                </ul>
            </div>
        )
    }

}

export default NodeList; 
