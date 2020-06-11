export const createStar = (star) => (
    $.ajax({
        url: `/api/nodes/${star.node_id}/stars`,
        method: 'POST',
        data: {
            star
        }
    })
);

export const deleteStar = (nodeId) => (
    $.ajax({
        url: `/api/stars/${nodeId}`,
        method: 'DELETE',
    })
);