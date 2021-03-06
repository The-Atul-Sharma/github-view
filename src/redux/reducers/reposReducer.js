export default function reducer(state={
    selectedRepo: {},
    data: [],
    fetching: false,
    fetched: false,
    error: null,    
}, action) {
  switch(action.type) {
    case "FETCH_REPOS_PENDING": {
      state = {...state};
      state.fetching = true;
      state.fetched = false;
      state.selectedRepo = {};
      break;
    }
    case "FETCH_REPOS_FULFILLED": {
      state ={...state, data: action.payload.data};
      state.fetched = true;
      state.fetching = false;
      break;
    }
    case "FETCH_REPOS_REJECTED": {
      state ={...state, error: "user fetching error"};
      state.fetched = false;
      state.fetching = false;
      break;
    }
    case "SELECT_REPO": {
      state = {...state};
      state.data.forEach(function(repo) {
        if (action.payload === repo.id) {
          repo.selected = true;
          state.selectedRepo = repo;
        } else {
          repo.selected = false;
        }
      });
      break;      
    }
    case "UN_SELECT_REPO": {
      state = {...state};
      state.data.forEach(function(repo) {
        repo.selected = false;
      });
      state.selectedRepo = {};
      break;
    }
  }
  
  return state
}