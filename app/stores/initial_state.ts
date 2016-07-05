import {fromJS, List, Map} from 'immutable';

export const getInitialState = () => {
  return Map<string, any>({
    searchHistory: Map<string, any>(fromJS({
      status: "",
      items : [],
    })),
    currentUser: Map<string, any>(fromJS({
      status: "",
      id : '',
    }))
  })
}

