import {fromJS, List, Map} from 'immutable';

export const getInitialState = ()=> {
    currentUser: Map<string, any>(fromJS({
      status: "",
      id : '',
    }))
  })
}

