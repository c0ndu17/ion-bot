import actionTypes from '../actionTypes.ts';
import {fromJS} from 'immutable';
import jsonRequest from '../utils/jsonRequest';
const _ = require('lodash');

const logger = (peep) => {
}
export const ionBotHear = {
  'log' : logger
};
const indexActions = (peep: string) => {
  if(!!peep) {
    var command = peep.split(" ");
    var botFunc = ionBotHear[command[0]];
    if( typeof(botFunc) === 'function' ) {
      botFunc(peep);
    }
    return "hi";
  }
}
export const userScripts = {
  indexActions,
}
