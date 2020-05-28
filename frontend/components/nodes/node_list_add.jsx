import React from 'react';


class NodeListAdd extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {

        const newNode = {
            id: null,
            body: "",
            completed: false,
            ord: null,
            parent_node_id: null,
        }
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