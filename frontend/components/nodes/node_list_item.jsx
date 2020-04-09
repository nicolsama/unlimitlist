import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NodeListContainer from './nodes_list_container';

class NodeListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.node.id,
            body: this.props.node.body,
            ord: this.props.node.ord,
            completed: this.props.node.completed,
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' && (this.state.id)) {
            // debugger; 
            this.props.updateNode(this.state);
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        debugger;

        let sublist = "";
        if (this.props.childNodes) {
            sublist = (<NodeListContainer state={this.props.childNodes} />)
        } 

        debugger;
        return (
            <>
            <li className="NodeListItem">
                <input type='text'
                value={this.state.body}
                onChange={this.update('body')}
                onKeyPress={(e) => this.handleKeyPress(e)}
                className="existingNode"
                />
            </li> 
                <div>
                    {sublist}
                </div>
            </>);
    }

}

export default NodeListItem;