export const fetchAllNodes = () => (
    $.ajax({
        url: "/api/nodes",
    })
);

export const fetchNode = (NodeId) => {
    return ($.ajax({
        url: `/api/nodes/${NodeId}`,
    }))
};

export const updateNode = (node) => (
    $.ajax({
        url: `/api/nodes/${node.id}`,
        method: 'PATCH',
        data: { node }
    })
);

export const createNode = (node) => (
    $.ajax({
        url: '/api/nodes',
        method: 'POST',
        data: {
            node
        }
    })
);

// node = {user_id: 3, body: "testing", parent_node_id: nil, ord: 4}


export const deleteNode = (nodeId) => (
    $.ajax({
        url: `/api/nodes/${nodeId}`,
        method: 'DELETE',
    })
);