export const selectAllNodes = (state = {}, action) => {
   
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

   
    let lastCreated = action.lastCreated;

    
    let pagesPath = [];
        action.pagesPath.forEach(id => pagesPath.push(id));

    
    return Object.assign({}, state, {
        allNodes
    }, {
        parentNodeIds
    }, {
        lastCreated: lastCreated
    }, {
        pagesPath
    });
    //return newState;
};