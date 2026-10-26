export default function Post(props){
  return(
    <div style={{border:'1px solid #333',margin:'10px 0',padding: '15px', borderRadius: '5px', backgroundColor: '#1e1e1e', color: '#d4d4d4'}}>
      <h3 style={{margin:'0 0 10px 0' }}>{props.title}</h3>
      <p style={{margin:0 }}>{props.body}</p>
    </div>
  );
}