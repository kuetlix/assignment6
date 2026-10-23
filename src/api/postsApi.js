export const fetchPosts=async (signal) =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { signal }); 
  if (!response.ok){
    throw new Error('Could not load data');
  }
  return await response.json();
};