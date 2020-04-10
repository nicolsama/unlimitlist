export const selectAllNodes = (state = {}, action) => {
    // debugger;
    let allNodes = {};
    action.nodes.forEach( node => {
        const {
            id,
            body,
            completed,
            ord,
            parent_node_id,
            child_ids
        } = node;

        let newNode = {
            [id]: {
                id: id, 
                body: body, 
                completed: completed, 
                ord: ord, 
                parent_node_id: parent_node_id,
                child_ids: child_ids
            
            }
        }
        allNodes = Object.assign({}, allNodes, newNode);
    });

    let parentNodeIds = [];
        action.parentNodeIds.forEach( item => parentNodeIds.push(item.id)); 
        parentNodeIds = parentNodeIds.sort((a,b) => allNodes[a].ord - allNodes[b].ord)

    // debugger;
    return Object.assign({}, state, {allNodes}, { parentNodeIds});
    //return newState;
};