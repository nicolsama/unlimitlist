import * as StarApiUtil from '../util/star_api_util';
import { receiveNodes, RECEIVE_NODES } from '../actions/node_actions';

export const createStar = star => dispatch => (
    StarApiUtil.createStar(star)
    .then(nodes => dispatch(receiveNodes(nodes)))
);

export const deleteStar = starId => dispatch => (
    StarApiUtil.deleteStar(starId)
    .then((nodes) => dispatch(receiveNodes(nodes)))
);