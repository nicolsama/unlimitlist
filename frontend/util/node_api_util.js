export const getAllNodes = () => (
    $.ajax({
        url: "/api/nodes",
    })
);

export const getNode = (NodeId) => {
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
        url: `/api/nodes/${node.id}`,
        method: 'POST',
        data: {
            node
        }
    })
);

export const deleteNode = (nodeId) => (
    $.ajax({
        url: `/api/nodes/${nodeId}`,
        method: 'DELETE',
    })
);