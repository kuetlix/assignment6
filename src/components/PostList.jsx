import Post from './Post';
export default function PostList(props){
  return(
    <div>
      {props.posts.map((p)=>(
        <Post key={p.id} title={p.title} body={p.body}/>
      ))}
    </div>
  );
}