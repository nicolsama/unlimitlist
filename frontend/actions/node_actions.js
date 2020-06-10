import * as NodeApiUtil from '../util/node_api_util'; 

export const RECEIVE_NODES = 'RECEIVE_NODES';
export const RECEIVE_NODE = 'RECEIVE_NODE';
export const REMOVE_NODE = 'REMOVE_NODE';

const receiveNodes = (nodes) => {
return (    
{
    type: RECEIVE_NODES, 
    allNodes: nodes.allNodes,
    parentNodeIds: nodes.parentNodeIds, 
    filteredNodes: nodes.filteredNodes,
    filteredParentNodeIds: nodes.filteredParentNodeIds,
    lastCreated: nodes.last_created,
    tags: nodes.tags, 
    stars: nodes.stars,
    pagesPath: nodes.path, 
    search: nodes.search

})};

const receiveNode = (node) => ({
    type: RECEIVE_NODE,
    node
});

const removeNode = (nodeId) => ({
    type: REMOVE_NODE,
    nodeId
});

export const fetchAllNodes = (search) => dispatch => {
return (
    NodeApiUtil.fetchAllNodes(search)
        .then(nodes => dispatch(receiveNodes(nodes)))
)};

export const fetchNode = nodeId => dispatch => (
    NodeApiUtil.fetchNode(nodeId)
        .then(nodes => dispatch(receiveNodes(nodes)))
);

export const createNode = node => dispatch => (
    NodeApiUtil.createNode(node)
        .then(nodes => dispatch(receiveNodes(nodes)))
); 

export const updateNode = node => dispatch => {
    return (NodeApiUtil.updateNode(node)
        .then(nodes => dispatch(receiveNodes(nodes)))
    )}; 


export const deleteNode = nodeId => dispatch => (
    NodeApiUtil.deleteNode(nodeId)
        .then((nodes) => dispatch(receiveNodes(nodes)))
);

