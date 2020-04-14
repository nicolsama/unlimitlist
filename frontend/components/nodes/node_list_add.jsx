import React from 'react';


class NodeListAdd extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // debugger; // when i try to replace these value in NODE LIST  get a recursive component creating
        // SO creating another component
        // let body = (this.props.currentNodeId) ? e.currentTarget.value : "";
        // let parent_node_id = (this.props.currentNodeId) ? this.props.currentNodeId : null; 
        const newNode = {
            id: null,
            body: "",
            completed: false,
            ord: null,
            parent_node_id: null,
        }

        // this.props.createNode(newNode);
    }

    render() {
        return (
            <input
                type='submit'
                value='+'
                id="addNode"
                onClick={(e) => this.handleClick}
            />
        )
    }

}

export default NodeListAdd;