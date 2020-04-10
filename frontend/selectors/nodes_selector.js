export const selectAllNodes = (state = {}, action) => {

    let newState;

    action.nodes.forEach( node => {
        const { id, body, completed, ord , child_ids} = node; 

        const newNode = {
            [id]: {
                id: id, 
                body: body, 
                completed: completed, 
                ord: ord, 
                child_ids: child_ids
            
            }
        }
        newState = Object.assign({}, newState, newNode);
    })

    return newState;
};