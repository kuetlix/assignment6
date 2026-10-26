export default function FilterForm({ filterText, onFilterChange }){
  return(
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search posts by title..."
        value={filterText}
        onChange={(e)=>onFilterChange(e.target.value)}
        style={{ 
          width:'100%', 
          padding:'10px', 
          fontSize:'16px', 
          borderRadius:'5px', 
          border:'1px solid #333', 
          backgroundColor:'#1e1e1e', 
          color:'#d4d4d4' 
        }}
      />
    </div>
  );
}