import actionTypes from '../actionTypes.ts';
import {fromJS} from 'immutable';
import jsonRequest from '../utils/jsonRequest';
import {userScripts} from '../scripts/index'
const _ = require('lodash');

const logIndex = (peep) => {
 userScripts.indexActions(peep);
};

export const userActions = {
  logIndex,
};
