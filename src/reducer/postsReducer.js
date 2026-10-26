export const initState ={
  posts:[],
  loading: false,
  error: null
};
export const postsReducer=(curState, dispatchedAction)=>{
  switch(dispatchedAction.type){
    case 'FETCH_START':
      return{ ...curState, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return{ ...curState, loading: false, posts: dispatchedAction.payload };
    case 'FETCH_ERROR':
      return{ ...curState, loading: false, error: dispatchedAction.payload };
    default:
      return curState;
  }
};