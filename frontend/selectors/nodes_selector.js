export const selectAllNodes = (state = {}, action) => {
   
    let allNodes = {};
    action.allNodes.forEach( node => {
        const {
            id,
            body,
            completed,
            ord,
            parent_node_id,
            child_ids, 
            star,
            updated_at
        } = node;

        let newNode = {
            [id]: {
                id: id, 
                body: body, 
                completed: completed, 
                ord: ord, 
                parent_node_id: parent_node_id,
                child_ids: child_ids, 
                starred: !!star,
                updated_at
            }
        }
        allNodes = Object.assign({}, allNodes, newNode);
    });


    let filteredNodes = {};
    action.filteredNodes.forEach(node => {
        const {
            id,
            body,
            completed,
            ord,
            parent_node_id,
            child_ids, 
            star,
            updated_at
        } = node;

        let newNode = {
            [id]: {
                id: id,
                body: body,
                completed: completed,
                ord: ord,
                parent_node_id: parent_node_id,
                child_ids: child_ids,
                starred: !!star,
                updated_at
            }
        }
        filteredNodes = Object.assign({}, filteredNodes, newNode);
    });


    let stars = []; 
    action.stars.forEach(star => {
        const {
            id, 
            node_id
        } = star;

        let newStar = {
            [id]: {
                node_id
            }
        }
        stars.push(newStar);
    });

    let parentNodeIds = [];
        action.parentNodeIds.forEach( item => parentNodeIds.push(item.id)); 
        parentNodeIds = parentNodeIds.sort((a,b) => allNodes[a].ord - allNodes[b].ord);

    let filteredParentNodeIds = [];
        action.filteredParentNodeIds.forEach(item => filteredParentNodeIds.push(item.id));
        filteredParentNodeIds = filteredParentNodeIds.sort((a, b) => allNodes[a].ord - allNodes[b].ord);
   
    let lastCreated = action.lastCreated;

    let pagesPath = [];
        action.pagesPath.forEach(id => pagesPath.push(id));

    return Object.assign({}, state, {
        allNodes
    }, {
        parentNodeIds
    }, {
        filteredNodes
    }, {
        filteredParentNodeIds
    }, {
        lastCreated
    }, {
        pagesPath
    }, {
        search: action.search
    }, {
        tags: action.tags
    }, {
        stars
    });
    //return newState;
};