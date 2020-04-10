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
        debugger;
        if ((!this.state.id) && e.key === 'Enter') {
            debugger; 
            this.props.createNode(this.state);
            this.setState({body: "", completed: false});
        }
    }

    render() {
        debugger;
        if (!this.props.parentNodeIds) return null; 

        debugger; 
            const nodeLis = this.props.parentNodeIds.map(id => {
                debugger
                let node = this.props.allNodes[id];
                debugger;
                return (<NodeListItem
                    key={node.id}
                    node={node}
                    allNodes={this.props.allNodes}
                    fetchNode={this.props.fetchNode}
                    updateNode={this.props.updateNode}
                />)
            })

        return (
            <div className="NodeListDiv">
                <ul className="NodeListUl">
                    {nodeLis}
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
