export const createStar = (star) => (
    $.ajax({
        url: '/api/stars',
        method: 'POST',
        data: {
            star
        }
    })
);


export const deleteNode = (starId) => (
    $.ajax({
        url: `/api/stars/${starId}`,
        method: 'DELETE',
    })
);