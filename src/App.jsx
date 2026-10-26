import { useState, useEffect, useReducer } from 'react';
import { fetchPosts } from './api/postsApi';
import { postsReducer, initState } from './reducer/postsReducer';
import FilterForm from './components/FilterForm';
import PostList from './components/PostList';

export default function App(){
  const [state, dispatch] = useReducer(postsReducer, initState);
  const [filterText, setFilterText] = useState('');

  useEffect(()=>{
    const controller=new AbortController();
    const fetchData=async ()=>{
      dispatch({ type: 'FETCH_START' });
      try{
        const data=await fetchPosts(controller.signal);
        dispatch({type: 'FETCH_SUCCESS', payload: data });
      }catch (error){
        if(error.name!=='AbortError'){
          dispatch({ type: 'FETCH_ERROR', payload: error.message});
        }
      }
    };
    fetchData();
    return ()=>{
      controller.abort();
    };
  }, []);
  const filteredPosts=state.posts.filter((post) =>
    post.title.toLowerCase().includes(filterText.toLowerCase())
  );
  return(
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#121212', color: '#e0e0e0', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Post Dashboard</h1>
      <FilterForm filterText={filterText} onFilterChange={setFilterText} />
      {state.loading && <p style={{ textAlign: 'center', color: '#888' }}>Loading posts...</p>}
      {state.error && <p style={{ color: '#ff6b6b', textAlign: 'center' }}>Hata: {state.error}</p>}
      {!state.loading && !state.error && filteredPosts.length === 0 && <p style={{ textAlign: 'center', color: '#888' }}>No posts found.</p>}
      {!state.loading && !state.error && filteredPosts.length > 0 && <PostList posts={filteredPosts} />}
    </div>
  );
}